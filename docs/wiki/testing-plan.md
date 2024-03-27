# Test Plan

Initial Author: Isaiah Savage

Last Updated: 3/25/2024

By: Isaiah Savage

## Unit Tests

### IEEE / Professor's Description

    Provide a description of the object classes (or appropriate source level construct depending on the programming model chosen) and the corresponding methods to be tested. Each test should call various methods and use an array of expected, edge-case, and erroneous inputs (see section 8.1.2 of the Sommerville Software Engineering textbook for more information). Each test should be connected to one or more requirements.

    Automated unit tests (preferred) should include the following:

    1. Setup part (test case initialization, inputs, and expected outputs) -- GIVEN:
    2. Call part (call object/method to be tested)                         -- WHEN:
    3. Assertion part (compare result of call w/ expected result)          -- THEN:

    There should be some form of output that shows the results of passed and failed tests (expected and actual outputs on failed tests).

### My Approach

My approach to unit testing will be twofold in its granularity:

1. Jest will be used to test individual JavaScript functions. This will include testing functions that handle user input, functions that handle API calls, and functions that handle data manipulation.
   - Jest has built-in support for the setup-call-assertion approach via the `it()`, `then()`, and `expect()` functions, respectively.
   - Grouping of tests will be done using the `describe()` function.
2. React Testing Library will be used to test React components. This will include testing components that handle user input, components that handle API calls, and components that handle data manipulation.
   - I do note that the naming of React components may lead to some confusion with the distinction between unit tests and component tests. For the purposes of this document, I will refer to the latter as integration tests.

Unit tests will be developed and ran locally on the dev's machine, as setting up the CI/CD pipeline for unit tests is not a priority at this time. The results of the tests will be logged in the console.

Dev(s) Responsible: @IsaiahSavage

## Integration (Component) Tests

### IEEE / Professor's Description

    Next, provide a description of tests that ensure the correctness of interacting objects. The focus here is the component interface(s). The unit tests should all be passing before you start component testing.

    The types of interfaces to be aware of include:
    1. Parameter interfaces (data/function references are passed between components)
    2. Shared memory interfaces (if applicable)
    3. Procedural interfaces (component has set of procedures callable by other parts of the code)
    4. Message passing ionterfaces (one compoennts requests a service from another component)

    You are looking for the following errors:
    1. Interface misuse
    2. Interface misunderstanding.
    3. Timing errors

    For specifics, I refer you back to your software engineering textbook.

### My Approach

The specific places where integration tests will be used will be determined by a mix of:

1. Manual, exploratory testing by the dev(s)
2. GitHub Copilot suggestions

Some places I forsee integration tests being used are:

- Testing the interaction between the RN app and the Firebase backend
- Testing the interaction between the React components (i.e., prop passing)
- Testing the interaction between the React components and the `UserContext` context provider
- Testing the navigation between screens

Dev(s) Responsible: TBD

## System Tests

### IEEE / Professor's Description

    Please describe how you will ensure that the major workflow(s) of your application are operating correctly. This will involve checking component capability, that interactions are operating according to your design, and that the data is flowing through all components as expected. The transformations that occur to inputs need to be verified at this point and overall outputs from the system should be verified as correct.

    The emergent behavior of your system should be sound once this phase of testing is complete. In other words, you need to tell me how your authenatication subsytem (if applicable) ties into your core application and how the core application ties into any backend components like a database or rendering system.

    It is recommended to use, **use case-based** testing at this point. It is also possible to draw on sequence diagrams to help you derive the needed test cases for this phase.

    Keep in mind that you only have so much time to dedicate to all levels of testing. It is not possible to be exhaustive with testing, just as complete as resources and time will allow.

### My Approach

I plan to have these tests written as scripts for the dev(s) to follow. The scripts will be written in Markdown and will be stored in the `docs/tests/scripts` directory of the repository. The scripts will be written in a way that allows the dev(s) to follow along and test the app on their own device.

Dev(s) Responsible: TBD

## User or Customer Tests

### IEEE / Professor's Description

    You should have several individuals not connected to the development of this project test your program at this point. The tests in this phase will include a script that exercises, at a minimum, the must-have requirements in your software.

### My Approach

User tests will be conducted by the dev(s) and the project sponsor, Mark Hansher. The tests will be conducted on each individual's chosen target platform (Android/iOS/~Web~). The results of the tests will be logged in a Microsoft Excel spreadsheet for future analysis.

Dev(s) Responsible: TBD

## Performance Tests

### IEEE / Professor's Description

    Once all other tests are complete, this section describes how the system will be stress tested. This includes placing high computational loads, high memory loads given a memory constrained environment, high levels of network traffic, and intermittent connectivity.

### My Approach

_TBD_

## References and Resources

Sommerville, I. (2016). _Software Engineering_ (K. Loanes, Ed.; 10th ed.). Pearson.

[React Native - Testing Overview](https://reactnative.dev/docs/testing-overview)

[React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
