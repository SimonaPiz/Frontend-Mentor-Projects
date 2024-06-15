# Interactive rating component
> <img src="https://github.com/SimonaPiz/Frontend-Mentor-Projects/blob/main/3-column-preview-card/images/favicon-32x32.png" width="20px" alt="icon frontendmentor"> **Frontend Mentor solution**

> This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<img src="https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/3dd85ecf-38f1-4518-b1c4-84074ec55dee" width="400px" alt="preview" title="preview"> <img src="https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/a154e548-e8a0-45ed-9654-19b6a63bac9e" width="400px" alt="preview" title="preview">

## Links

- ➡ Solution URL: [Repo GitHub SimonaPiz/](https://github.com/SimonaPiz/Frontend-Mentor-Projects/tree/main/interactive-rating-component)
- ☑ Live Site URL: [fm-interactive-component-simonapiz.netlify.app](https://fm-interactive-component-simonapiz.netlify.app/)
- 📱 Preview on mobile:

  <img src="https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/b64cffc5-27b4-420d-b578-f01434a9388b" width="200px" alt="Site QR Code">


  *Use your smartphone camera to open QR code link.*

## Table of contents

- [Links](#links)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
Build out this interactive rating component and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Desktop

    Design ➡ Solution

<img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/blob/3f261ddf8c8d17454c8ff92c75086c00404f97c5/interactive-rating-component/design/desktop-design.jpg' alt='Desktop Design' height='250px' title='Desktop Design'> <img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/24bd0308-8c19-4066-a976-3b4001d29e60' alt='Desktop Solution' height='250px' title='Desktop Solution'>

<img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/blob/3f261ddf8c8d17454c8ff92c75086c00404f97c5/interactive-rating-component/design/desktop-thank-you-state.jpg' alt='Desktop Design Thank you' height='250px' title='Desktop Design Thank you'> <img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/72dee01e-0b5d-4a71-b34d-5c8d3b57849a' alt='Desktop Solution Thank you' height='250px' title='Desktop Solution Thank you'>

Mobile

     Design ➡ Solution

<img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/blob/3f261ddf8c8d17454c8ff92c75086c00404f97c5/interactive-rating-component/design/mobile-design.jpg' alt='Mobile Design' width='200px' title='Mobile Design'> <img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/40a7d1fd-f609-4f12-9970-823642aa0c81' alt='Mobile Solution' width='200px' title='Mobile Solution'>

<img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/blob/3f261ddf8c8d17454c8ff92c75086c00404f97c5/interactive-rating-component/design/mobile-thank-you-state.jpg' alt='Mobile Design Thank you' width='200px' title='Mobile Design Thank you'> <img src='https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/d2367d94-33d2-4bae-a714-ba6158d785bd' alt='Mobile Solution Thank you' width='200px' title='Mobile Solution Thank you'>

## My process
1. 🗂 Initialize the project on [GitHub](https://github.com/SimonaPiz/Frontend-Mentor-Projects/tree/main/interactive-rating-component) and use Git for log my commits and versioning my work.

2. ✏ I looked at the designs, in [design directory](https://github.com/SimonaPiz/Frontend-Mentor-Projects/tree/main/interactive-rating-component/design), to start planning how to approach the project:
     - Desktop Design
     - Mobile Design
  
3. ⚙ Implemented project features with HTML CSS and JS  ✅ [issue #36](https://github.com/SimonaPiz/Frontend-Mentor-Projects/issues/36) :

   Users should be able to:

    - [x] View the optimal layout for the app depending on their device's screen size
    - [x] See hover states for all interactive elements on the page
    - [x] Select and submit a number rating
    - [x] See the "Thank you" card state after submitting a rating
4. Test Accessibility with Ligthhouse and manual test ✅ [issue #41](https://github.com/SimonaPiz/Frontend-Mentor-Projects/issues/41)

    ![Lighthouse results](https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/1e2cdae0-eb21-4073-8d6a-7abbb12b1eb7)

5. 🚀 Buil and Deploy with Netlify

    ![image](https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/7632f661-8efb-4e6e-99d1-a5e024617634)

    ![image](https://github.com/SimonaPiz/Frontend-Mentor-Projects/assets/91121660/ef07f031-5c5d-4561-bf27-578e7bd8d26b)
   
6. ℹ Update README file
7. ➡ Submit my solution

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS media queries
- JavaScript Dom manipulation

### What I learned

I improved my skills in web accessibility:
- add aria role, label, use semantic tag, ...

example html:
```html
...
<fieldset id="select-rating" 
  aria-label="select a rating" 
  role="radiogroup" 
  aria-required="true" 
  tabindex="0"
  name="rating"
>
  <div class="radio">  
    <input type="radio" id="radio1" name="rating" value="1" />
    <label for="radio1">1</label>
  </div>
...
```

- use keyborard to navigate and focus elements in the webpage

example js:
```js
...
const toggleCheck = (el) => {
  if (!el) return;
  let checked = el.getAttribute('checked');
  el.setAttribute('checked', checked == 'true' ? 'false' : 'true');
  el.nextElementSibling.setAttribute('class', checked == 'true' ? '' : 'checked');
}
...
```

## Author

- GitHub - [Simona Pizio](https://github.com/SimonaPiz)
- Frontend Mentor - [@SimonaPiz](https://www.frontendmentor.io/profile/SimonaPiz)
