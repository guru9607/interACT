export const generateCertificate = async (
    participantName: string,
    eventTitle: string,
    eventDate: string,
    certificateId: string
) => {
    try {
        const response = await fetch('/certificates/certificate-template.svg');
        let svgContent = await response.text();

        // Replace placeholders
        svgContent = svgContent.replace('[Participant Name]', participantName);
        svgContent = svgContent.replace('[Program Title]', eventTitle);
        svgContent = svgContent.replace('[Date]', eventDate);
        svgContent = svgContent.replace('[CERT-ID]', certificateId);

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
