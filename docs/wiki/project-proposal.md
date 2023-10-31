# Project Proposal: MVNU Spiritual Life App, Part I

## Isaiah Savage

### PURPOSE AND SCOPE

This project is being conducted as a part of my larger Honors project for HON-4099. This project involves the development of a mobile app for university and church small groups with the goal of enriching spiritual formation of members both as individuals and as a collective whole. The app’s intention is to improve help facilitate the growth of a cohesive spiritual community within these groups. The scope of the development outlined in this project is a fully functional front end for the application.

### FUNCTIONAL DESCRIPTION

**Primary Functionality**

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

**I/O**
Input

- User authentication data
- User responses to reflection prompts
- User-submitted prayer requests
- User settings
- User search queries

Output

- Login streak
- Daily habit completion status
- Display user settings
- Display prayer requests
- Display group content
- Display resources, both generally and based on search query
- Display updates

**Interfaces**

User Interfaces

- iOS App (accessed by students, leaders, content creators, admins, stakeholders, etc.)
- Android App (accessed by students, leaders, content creators, admins, stakeholders, etc.)
- Website (accessed by students, leaders, content creators, admins, stakeholders, etc.)
- Database Console (accessed by admins)

System Interfaces

- Bible API(?)

### CONSTRAINTS

**Available Resources**

Hardware

- Will need to make use of a MCS server to host the app during development.
  - _NOTE_: Will need to migrate to a server maintained by ITS for production deployment.
- Dev, Test, and Prod environments will need to be set up.
- Dev, Test, and Prod environments will need to be recreated and maintained by ITS.
  - _NOTE_: sufficient doumentation will be provided to make this as easy as possible.

Software

- MCS VM is available to host app during development.
  - This will likely be an Ubuntu server running a Docker container with the app.
  - _NOTE_: Will need to migrate to a VM maintained by ITS for production deployment.
- Will need to use a database to store user data -- likely Firebase
- Will need to be maintained by ITS (both front-end and back-end code)
  - _NOTE_: sufficient doumentation will be provided to make this as easy as possible.

Expertise

- Little resources (info, people, etc.) on campus regarding React Native development

**External Environment**

User Types

- Members (e.g., students, congregants, etc.)
- Group Leaders
- Content Creators
- Admins (e.g., MCS Department, ITS, etc.)

Adaptation Constraints

- No budget (must use free SaaS/IaaS/PaaS/etc.)
- Must be deployed to app stores by end of Spring 2024
- Needs to be maintainable by MVNU ITS for the forseeable future

**Cost Limits**

- Apple Developer Program Enrollment: $99 | $299 / year
  - _NOTE_: This may be waived for educational purposes.
  - May be able to be sponsored by the MCS Department.
- Google Developer Account: $25 / account
  - May be able to be sponsored by the MCS Department.
- Depending on how large the app scales, there may be a need to upgrade database resources.

**Schedule Requirements**

- Working front-end UI for iOS and Android must be ready for presentation by end of Fall 2023.
- The database and backend must be ready for presentation by end of Spring 2024.
  - _NOTE_: This will be completed with a software engineering team in CSC-3024.
- Finalized front-end app and Honors project paper must be completed by 2/1/2024.
- Any additional revisions to the app or paper must be made by 3/1/2024.
