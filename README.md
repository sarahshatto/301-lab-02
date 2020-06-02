# 301-lab-02
301 partner programming Lab 02

Driver: Sarah Shatto
Navigator: Michael Refvem


Feature #1: Display images

Why are we implementing this feature?

As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?

Given that a user opens the application in the browser When the user navigates to the home page Then the photo gallery should display all of the images in the gallery

How are we implementing it?

Use AJAX, specifically $.ajax(), to read the provided JSON file.
Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.


Number and name of feature: Feature #1

Estimate of time needed to complete: 1 hour

Start time: 1:45

Finish time: _____

Actual time needed to complete: _____


Feature #2: Filter images

Why are we implementing this feature?

As a user, I want to be able to filter the images so that I can view only images that match a keyword.
What are we going to implement?

Given that a user clicks on the dropdown menu When the user selects one of the options Then only the images whose keyword matches the option should be displayed

How are we implementing it?

Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

Number and name of feature: Feature #2

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

Feature #3: Style the application

Why are we implementing this feature?

As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.
What are we going to implement?

Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in rows across the screen

How are we implementing it?

Style your application using floats.
Utilize at least one Google font.
Stretch Goal: Sort the images

Why are we implementing this feature?

As a user, I want to be able to sort the images so there is an order to how they render.
What are we going to implement?

Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

How are we implementing it?

Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.

Number and name of feature: Feature#3

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____