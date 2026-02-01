export type ACTModule = "awareness" | "contemplation" | "transformative_silence" | "combined";

export const FEEDBACK_QUESTIONS = {
    awareness: [
        { id: "q1", type: "textarea" as const, question: "What did you personally feel or realize about yourself during today's session?" },
        { id: "q2", type: "textarea" as const, question: "Did any part of today's experience help you sense your inner peace, love, or goodness? If yes, what helped most?" },
        { id: "q3", type: "scale" as const, question: "On a scale of 1–5, how connected did you feel with your true self today?" },
        { id: "q4", type: "textarea" as const, question: "What could we do differently next time to help participants experience awareness more deeply?" },
    ],
    contemplation: [
        { id: "q1", type: "textarea" as const, question: "Which inner quality (like peace, love, willpower, etc.) did you feel most connected to today?" },
        { id: "q2", type: "textarea" as const, question: "Did the activities or reflections help you value yourself more deeply? How so?" },
        { id: "q3", type: "scale" as const, question: "On a scale of 1–5, how much clarity did you gain about your own strengths or values?" },
        { id: "q4", type: "textarea" as const, question: "What part of today's session felt most meaningful or could be improved for deeper self-reflection?" },
    ],
    transformative_silence: [
        { id: "q1", type: "textarea" as const, question: "During the silence or reflection period, what did you notice within yourself?" },
        { id: "q2", type: "textarea" as const, question: "Did you feel any sense of inner strength, clarity, or connection to something higher? Please describe briefly." },
        { id: "q3", type: "scale" as const, question: "On a scale of 1–5, how empowering or transformative did today's experience feel for you personally?" },
        { id: "q4", type: "textarea" as const, question: "How could we make the silence or reflection experience even deeper or more comfortable next time?" },
    ],
    combined: [
        { id: "q1", type: "textarea" as const, question: "What did you feel or realize about yourself through today's experience?" },
        { id: "q2", type: "scale" as const, question: "To what extent did you feel connected to your true self — beyond your roles or responsibilities?" },
        { id: "q3", type: "textarea" as const, question: "Did any part of the workshop help you feel more stable, confident, or empowered from within? If yes, what helped the most?" },
        { id: "q4", type: "textarea" as const, question: "How could we make this experience more meaningful or comfortable for participants next time?" },
    ],
};

export const MODULE_LABELS = {
    awareness: "Awareness (Who am I?)",
    contemplation: "Contemplation (What are my qualities?)",
    transformative_silence: "Transformative Silence",
    combined: "Full interACT Workshop",
};
