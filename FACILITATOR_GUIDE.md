# 🌿 interACT Facilitator Guide

Welcome to the updated interACT platform! We've implemented several new features to help you manage events and showcase the impact of our workshops.

## 1. Managing Events

Access the **Events Dashboard** using your unique link:
`https://www.theinteract.org/events-dashboard?secret=interact2026`

### Create an Event
- **Details Matters**: All fields (Title, Date, Time, Location, Region, Type, Description, and Agenda) are required.
- **Host / Conductor selection**: 
    - You MUST select a host from the dropdown list.
    - We have simplified it to a single list containing both **Registered Facilitators** and **Core Team Members**.
    - The selected host's name will be prominently displayed in the header of the Event Detail page.
- **Location vs. Country**:
    - **Location**: The specific venue name (e.g., *Vishwa Pariwartan Bhavan, Pune*).
    - **Country**: The country name (e.g., *India*). This is used for the "Past Impacts" gallery.
- **ACT Module**: Select the specific module for the event. This determines which feedback questions participants will see.

### Assigning Hosts to Past Events
- New events require a host selection at creation.
- For historical events (created before this feature), hosts are updated directly in the database. 
- **SQL Tip**: Use `UPDATE events SET conductor_type = 'team', conductor_id = '3' WHERE id = 1;`

### Completing an Event
- Once an event is over, find it in the "Events Management" section.
- **Enable Feedback Instantly**: You can now click **"Mark Completed"** even if you don't have photos yet! This will immediately enable the "Share Experience" button for participants.
- **Add Photos Later**: Events marked as completed but missing photos will stay in your dashboard. You can upload multiple photos to showcase them in the "Past Impacts" gallery.

## 2. The Feedback System

We've designed a feedback experience to gather deep insights from participants.

### How it Works
- On the event detail page (once completed), a **"Share Your Experience"** button appears in the header.
- The form is a **multi-step journey**:
    1. **Profile**: Personal details (Name, Email, Phone).
    2. **Insight**: ACT-specific questions based on the module you chose.
- **All Fields are Required**: Participants must fill in every field to submit.

### Showcasing Impact
The website automatically selects the **top 4 most impactful 5-star testimonials** to show on the event page.
- **Smart Logic**: It prioritizes "Self-Realization" and "Empowerment" quotes.
- **Privacy**: Improvement suggestions are **never shown publicly**—they are for your eyes only in the database.

## 3. Public Galleries

- **Upcoming Events**: Filtered by region. Shows the specific location.
- **Past Impacts**: A global gallery showing snapshots from our history. It displays the **Country** for a cleaner, professional look.

## 🚀 What to do differently?
1. **Be specific with Location/Country**: Always separate the building name from the Country name.
2. **Encourage Feedback**: Ask participants to click the "Share Your Experience" button on the website immediately after the session.
3. **High-Quality Photos**: The system now relies on photos to "Complete" an event, so ensure you capture 1-2 good snapshots!

Thank you for your dedication to creating transformative experiences! 🕊️
