const imageUrlToBase64 = async (url: string): Promise<string> => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error(`Failed to convert image to base64: ${url}`, error);
        return '';
    }
};

export const generateCertificate = async (
    participantName: string,
    eventTitle: string,
    eventDate: string,
    certificateId: string,
    signatories?: { name: string; role: string; signatureUrl?: string }[]
) => {
    try {
        const response = await fetch('/certificates/certificate-template.svg');
        let svgContent = await response.text();

        // 1. Handle Logo (Embed as Base64)
        const logoBase64 = await imageUrlToBase64('/logo.png');
        svgContent = svgContent.replace('href="/logo.png"', `href="${logoBase64}"`);
        // Also handle the potential placeholder I'll add
        svgContent = svgContent.replace('[LOGO_BASE64]', logoBase64);

        // 2. Replace Basic Placeholders
        svgContent = svgContent.replace('[Participant Name]', participantName);
        svgContent = svgContent.replace('[Program Title]', eventTitle);
        svgContent = svgContent.replace('[Date]', eventDate);
        svgContent = svgContent.replace('[CERT-ID]', certificateId);

        // 3. Handle Signatures
        // Default signatories if none provided
        const defaultSignatories = [
            {
                name: "Muralindran Mariappan",
                role: "Co-Founder",
                signatureUrl: "/signatures/muralindran.png"
            },
            {
                name: "Ayako Ichimaru",
                role: "Co-Founder ",
                signatureUrl: "/signatures/ayako.png"
            },
            {
                name: "Sakshi Kamlapure",
                role: "Chairperson",
                signatureUrl: "/signatures/sakshi.png"
            },
 
        ];

        const activeSignatories = signatories || defaultSignatories;

        for (let i = 0; i < 3; i++) {
            const sig = activeSignatories[i];
            const num = i + 1;

            if (sig) {
                svgContent = svgContent.replace(`[Sig ${num} Name]`, sig.name);
                svgContent = svgContent.replace(`[Sig ${num} Role]`, sig.role);

                if (sig.signatureUrl) {
                    const sigBase64 = await imageUrlToBase64(sig.signatureUrl);
                    svgContent = svgContent.replace(`[SIG_${num}_IMAGE]`, sigBase64);
                } else {
                    svgContent = svgContent.replace(`[SIG_${num}_IMAGE]`, '');
                }
            } else {
                // Clear placeholders if no signatory for this slot
                svgContent = svgContent.replace(`[Sig ${num} Name]`, '');
                svgContent = svgContent.replace(`[Sig ${num} Role]`, '');
                svgContent = svgContent.replace(`[SIG_${num}_IMAGE]`, '');
            }
        }

        // Create a blob and download
        const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `interACT_Certificate_${participantName.replace(/\s+/g, '_')}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error generating certificate:', error);
        throw new Error('Failed to generate certificate');
    }
};
