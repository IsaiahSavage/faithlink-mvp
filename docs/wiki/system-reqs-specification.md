# System Requirements Specification - DRAFT

> This document contains a template structure for your system requirements specification. To use this outline, replace the description under each section heading with the information about your project, but keep all of the section headings to maintain the structure of the document. If a section does not apply to your project, keep the heading in your document, and just state that it is not applicable. (In some cases, we might discover later that your project does have requirements related to that section!)

# Honors Project: Spiritual Life App

_Isaiah Savage_

_Advisor: Dr. Michael Robbeloth (@mrobbeloth)_

## Introduction

### System Overview

This project is being conducted as a part of my larger Honors project for HON-4099. This project involves the development of a mobile app for university and church small groups with the goal of enriching spiritual formation of members both as individuals and as a collective whole. The app’s intention is to improve help facilitate the growth of a cohesive spiritual community within these groups. The scope of the development outlined in this project is a fully functional front end for the application.

### Human Resources

I need more developers to finish the app. Without more human resources, I will have to keep the practicum scope limited to the front end of the app.

### Business Context

N/A

## User Requirements (written for customers, may need user stories and/or use case diagrams)

### User Objectives

This section describes a list of objectives and requirements from the user's perspective. You may start by copying the second section from your project proposal (Functional Description), and revise it as necessary (e.g., must-include requirements for M.V.P. and should-include requirements). This may include a _wish list_ (e.g, nice-to-haves) of desirable features, along with comments if there are questions about whether a feature is likely to be feasible or consistent with the overall organizational context.

System has to do that a common person could get (e.g., create an account)

- Daily habit tracking (Logins, Scripture, Reflection Journal, Prayer)
  - View daily habit tracking dashboard
  - View daily habit tracking progress
  - View daily habit tracking activities
  - View daily habit tracking streak
- Resources for various topics, including articles, videos, and other forms of content
  - View resources
  - View resources by topic
  - Search for resources
- Group specific content (i.e., resources, contact info, prayer requests, group updates)
  - Sign up for a group
  - View group content
  - View group updates
  - View group prayer requests
- Prayer timer for both guided and unguided prayer
  - Submit a prayer request
  - View prayer requests
- Profile linked to an account
  - Create an account
  - Log in to an account
  - Log out of an account
  - Remove an account
- Activity page
- Group leaders can create content for the Resources page

### Similar System Information

TBD

(e.g., create an account: open the landing page, user credentials, validate credentials, store info in DB, salt/hash password, etc.)

### User Characteristics

- Members (e.g., students, congregants, etc.) -- Basic computer literacy
- Group Leaders -- Basic computer literacy
- Content Creators -- Basic computer literacy, HTML / basic markup language
- Admins (e.g., MCS Department, ITS) -- Advanced computer literacy, knowledge of React Native, Firebase, Docker, etc.

## Functional or System Requirements

- [ ] Daily habit tracking (Logins, Scripture, Reflection Journal, Prayer)
  - Upon logging into the system, the user should be presented with a daily habit tacking dashboard that displays the user’s current login streak and the user’s progress on the daily habits (Scripture, Reflection Journal, Prayer).
  - The user should be able to access the daily habit activities from the dashboard.
- [ ] Resources for various topics, including articles, videos, and other forms of content
  - The user should be able to access the Resources page from the bottom tabs.
  - The user should be able to view or access a resource from the Resources page.
  - The user should be able to search for a topic from the Resources page.
  - _SHOULD HAVE_: The user should be able to filter search results by topic (e.g., Faith, Anxiety, Relationships, Health, etc.).
- [ ] Group specific content (i.e., resources, contact info, prayer requests, group updates)
  - The user should be able to access the groups page from the Home page.
  - The user should be able to see the group they are a part of from the groups page.
  - The user should be able to view content specific to their group from the groups page.
  - The user should be prompted to learn more about groups if they are not a part of one.
  - The user should be able to submit a prayer request to their group.
  - The user should be able to view prayer requests from fellow group members.
  - _SHOULD HAVE_: The user should be able to sign up for a group from the Group page during sign up periods.
- [ ] Prayer timer for both guided and unguided prayer
  - The user should be able to access the Prayer page from the bottom tabs.
  - The user should be able to select a prayer length.
  - The user should be able to start the prayer timer.
  - The user should be able to pause the prayer timer.
  - The user should be able to stop the prayer timer.
  - _SHOULD HAVE_: The user should be able to select whether the prayer is guided or unguided.
  - _SHOULD HAVE_: The user should be able to view prayer requests by fellow members of their group while using the guided prayer feature.
- [ ] Profile linked to simple email/password authentication
  - The user should be able to create a local account using an email and password.
  - The user should be able to log in to and out of the app.
  - The user should be able to view their profile information from the Profile page.
  - The user should be able to access the Settings page from the Profile page.
  - _SHOULD HAVE_: The user should be able to remove an account.
  - _NICE TO HAVE_: The user should be able to access a link to the iAttended app from the Profile page.
- [ ] Activity page
  - The user should be able to access the Activity page from the bottom tabs.
  - The user should be able to view important updates from Campus Ministries on the Activity page.
  - The user should be able to view important updates from their group on the Activity page.
  - The user should be able to dismiss updates.
  - Activities should be listed with a timestamp.
  - _NICE TO HAVE_: The user should receive a push notification when a new update is available.
- [ ] Group leaders can create content for the Resources page (NOTE: this may be a future feature after first release)

## Interface Requirements

(Tip: There are many methods to generate GUI mockups or diagrams that include SceneBuilder, Draw.io, Visio, etc., if needed to supplement any verbal descriptions)

### User Interfaces

- iOS App (accessed by members, leaders, content creators, admins, etc.)
- Android App (accessed by members, leaders, content creators, admins, etc.)
- Website (accessed by members, leaders, content creators, admins, etc.)
- Database Console (accessed by admins)

### Hardware Interfaces

N/A

### Communications Interfaces

Describes network interfaces

### Software Interfaces

- Firebase Database (host user data)

- Virtual Machine (host containerized app)

  - MCS VM is available for development purposes
  - Will need to migrate to a VM maintained by ITS for production deployment (MVNU)
  - Will need to establish a VM for each customer (i.e., MVNU, churches, etc.)

- Bible API(?)

## Non-functional Requirements (Other than those previously listed)

(Examples from Ian Sommerville's Software Enginnering book and/or augmented by your prof)

### Hardware Constraints

_Describes any required software interfaces, such as a server, database, or specific APIs._

_Size: Megabytes of memory, number and type of ROM chips, amount of storage, server specs, number of virtual machines, containers, etc._

Need dev, test, and prod environments, each with:

- Virtual Machine
- Database (Firebase)
- Containerized app (Docker)

---

- DB Query times
- Page returns in x ms
- Experience should take up no more than 300 MB per tab
- User must have at least 300 MB of RAM

### Performance Requirements

_Specifies any time and memory constraints that must be satisfied for the system to be effective._

_Speed: Processed transactions/second, Processed transactions/second, Processed transactions/second, etc._

No time or memory constraints are currently established.

### System Environment Constraints

- HTTPS for all network requests
- HTML, CSS, and JavaScript(?) support for viewing content

### Security Requirements

- Encrypted passwords / other login information
- [GDPR compliance](https://gdpr.eu/compliance-checklist/)
  - _NOTE_: this is a legal requirement for any software that collects data from EU citizens
  - This may not be necessary to implement for this project, but it is worth considering.
- System will be updated first in dev, then test, then prod environments. This will allow for testing of the update process before it is deployed to the production environment and maintain integrity of the application data.
- Prod data will be kept separate from dev and test data to prevent loss of data confidentiality, integrity, or availability.

### Reliability

Describe to what extent the system **will correctly provide** implmented services in probablistic terms (what service level does your sponsor need to the system to achieve). What mechanims will be needed to allow this level of reliability (auto-restart of services, load-balanacing/CDN, caching, test/deploy servers with rollback, etc.).

Examples: mean-time-to-failure (MTTF), probability of unavailability, rate of failure occurrence, etc.

TBD

### Robustness

Time to restart after failure, percentage of events causing failure, or probability of data corruption on failure

TBD

### Availabilty

Idealistically, the app would provide 3 9s.

- CI/CD
- Test env used to stage changes to allow for rollback + greater availability

### Safety

Information included in prayers may be potentially sensitive. Otherwise, the system is not likely to cause physical, emotional, or psychological harm to the user.

This project has been approved by the Mount Vernon Nazarene University Institutional Review Board (IRB).

### Maintenance

Describes how to:

1. Recreate dev environment

   - Clone repo
   - `npm install`
   - `npm start` or `npx expo start`

2. Recreate pushing to prod

   - TBD

### Portability

iOS, Android, Web should all be supported.

### Extensibility

Describes any constraints on forward or backward compatibility with other systems.

### Development Process Constraints

Describes the software development environment to be used, including operating systems, programming languages, platforms, or libraries, indicating any reasons that these are required or preferred. What percentage of target dependent statements are likely to be in the system? Keep in mind there is often a difference between the system that you develop the software on and the target systems where the software will execute.

- Developers will make use of Windows for development purposes.
- macOS + XCode required to build for / deploy to / test on iOS devices.
- Developers will make use of Visual Studio Code for development purposes.
- Developers will make use of Git + GitHub for version control.
- Docker for containerization
- Firebase for database
- React Native for app development

## System Models

This section includes diagrams showing relationships between major system components and the environment. It may include one or more of the following:

- Context Models: what is part of the system and what is not. Includes model diagrams and activity diagrams

- Interaction Models: user to inputs/outputs, software to other systems/environment or among components in a system. Includes use-case digrams and sequence diagrams)

- Structural Models: how the components of the system relate to one another in a static manner. Includes class diagrams (top-level, detailed, aggregation/generalization), component diagrams, deployment diagrams, package diagrams, profile diagrams, and composite structure diagrams.

- Behavorial Models: show the dynamic behavior of the system as it executes. It includes activity (for data-flow), state/state-machine diagrams (event-flow), or timing diagrams

- Entity-Retionship diagrams (for database design) with schema reduction and normalization to third-normal-form (3NF) or Boyd-Codd Normal Form (BCNF) dependening on need for preserving functional dependencies (FDs, essentially business/logic rules).

## Operational Scenarios

This section may include a set of scenarios that illustrate, from the user's perspective, what will be experienced when utilizing the system under various situations. In the article Inquiry-Based Requirements Analysis (IEEE Software, March 1994), scenarios are defined as follows:

> A scenario is simply a proposed specific use of the system. More specifically, a scenario is a description of one or more end-to-end transactions involving the required system and its environment. Scenarios can be documented in different ways, depending on the level of detail needed. The simplest form is a use-case diagram, which consists of a labeled interaction between actors. More detailed forms are called scripts. These are usually represented as tables or sequence diagrams and involve identifying a sequence of actions and the agent (doer) of each action.

Although scenarios are useful in acquiring and validating requirements, they are not themselves requirements, because they describe the system's behavior only in specific situations; a specification, on the other hand, describes what the system should do in general.

You may want to include user stories here as an alternative for describing operational scenarios

## Appendices

Specifies other useful information for understanding the requirements. Most requirements should include at least the following two appendices:

- **Definitions, Acronyms, Abbreviations**

Provides definitions of specialized terms or acronyms that must be understood in the context of this application.

- **References**

Provides complete citations or URLs for all documents and websites referenced or used in the preparation of this document. Use MLA, APA, or other appropriate citation system (be consistent and use MLA throughout or APA throughout, etc.).
