# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**Ticket 1: Allow Facilities to save custom ids for Agents**

Description:
Currently, the reports generated for Facilities use the internal database ids of Agents. This ticket aims to enhance the system by allowing Facilities to save their own custom ids for the Agents they work with. These custom ids will be used in the reports generated for the Facilities.

Acceptance Criteria:

- Facilities can add and save custom ids for Agents.
- The custom ids are associated with the respective Agents and stored in the database.
- The custom ids are used instead of the internal database ids in the generated reports.
- The system provides appropriate validation and error handling for custom ids to ensure uniqueness and data integrity.
- The existing functionality of generating reports remains intact.
- Time/Effort Estimate: 5-8 hours

Implementation Details:

- Add a new field in the Agents table to store the custom ids.
- Modify the user interface to allow Facilities to input and save custom ids for Agents.
- Implement backend logic to validate and store the custom ids in the database.
- Update the report generation code to use the custom ids instead of internal database ids.



**Ticket 2: Update getShiftsByFacility to include custom Agent ids**

Description:
The current function `getShiftsByFacility` returns all Shifts worked by a Facility for a given quarter, including some metadata about the assigned Agents. This ticket involves updating the function to include the custom ids of Agents, which will be retrieved from the database and included in the result.

Acceptance Criteria:

- The `getShiftsByFacility` function returns all Shifts worked by the Facility, including the custom ids of the assigned Agents.
- The custom ids are retrieved from the database and included in the result set.
- The existing functionality of `getShiftsByFacility` remains intact.
- Time/Effort Estimate: 3-5 hours

Implementation Details:

- Modify the `getShiftsByFacility` function to fetch the custom ids of the assigned Agents from the database.
- Include the custom ids in the metadata returned by the function.



**Ticket 3: Update generateReport to use custom Agent ids**

Description:
The `generateReport` function converts a list of Shifts into a PDF report. Currently, it uses the internal database ids of Agents in the generated reports. This ticket involves updating the function to utilize the custom ids of Agents instead of the internal database ids.

Acceptance Criteria:

- The `generateReport` function generates PDF reports using the custom ids of Agents.
- The custom ids are fetched from the database and used in the report generation process.
- The existing functionality of `generateReport` remains intact.
- Time/Effort Estimate: 3-5 hours

Implementation Details:

- Modify the `generateReport` function to fetch the custom ids of Agents from the database.
- Update the report generation code to utilize the custom ids instead of the internal database ids.



**Ticket 4 (Optional): Provide UI for Facilities to manage custom Agent ids**

Description:
To enhance the user experience, this ticket involves providing a user interface for Facilities to manage the custom ids of Agents. Facilities should be able to add, edit, and delete custom ids for the Agents they work with.

Acceptance Criteria:

- Facilities have a user interface to add, edit, and delete custom ids for Agents.
- The interface provides appropriate validation and error handling for custom ids to ensure uniqueness  and data integrity.
- Changes to custom ids reflect in the database and are used in the reports generated.
- Time/Effort Estimate: 6-10 hours

Implementation Details:

- Design and develop a user interface for Facilities to manage custom ids.
- Implement frontend logic for adding, editing, and deleting custom ids.
- Update backend logic to handle custom id modifications and ensure data consistency.