# athena-docker

Athena, named after the Greek goddess of wisdom, is a :star2: Quiz Web Application :star2: that automates fetching questions from IndiaBIX. By saving users' valuable time, the tool significantly enhances the process of skill enhancement. This version of the web app is primed for a Docker environment.

## :pushpin: Instructions

### Step 1: Install Docker

Visit the [Docker website](https://www.docker.com/get-docker/) and follow the guidelines particular to your OS for installing Docker. If your operating system version does not support Docker Desktop, you may consider using [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install/) instead.

### Step 2: Clone and Run

After installing Docker, execute the following commands in your terminal:

```bash
git clone <repository_URL>
cd athena-docker
docker build -t quiz-app .
docker run -p 8000:8000 quiz-app
```

### Step 3: Input URLs

Make sure to input URLs in the following format: **`[base_url]`**, **`[start_url]`**, **`[end_url]`**. For example, if you have Section 1 of the topic Networks Analysis and Synthesis under Electronics and Communication Engineering, you'll have this link:

```bash
https://www.indiabix.com/electronics-and-communication-engineering/networks-analysis-and-synthesis/026001
```

Typically, the start page has a URL number of `026001`, and the end page has a URL number of `026010` (indicating that the section has 10 pages). Therefore, you'll input it as follows:

```bash
https://www.indiabix.com/electronics-and-communication-engineering/networks-analysis-and-synthesis/, 026001, 026010
```

In this one URL, you’ll have a total of 50 questions loaded to the web app, as each URL number in IndiaBIX typically has 5 questions. This feature will save you time and help you focus on the questions with the added features.

## :boom: Features

### :book: Study Mode

- **Reset Button:** Reset questions to question number 1 and removes selected options.
- **Shuffle Button:** Changes the order of questions.
- **Favorites Button:** Mark and revisit beloved questions.
- **Search Button:** Navigate through questions.

### :bell: Quiz Mode

Ultimately similar to Study Mode but with additional features; these unique features in Quiz Mode include:

- **Scoring system** :chart_with_upwards_trend:
- **Review of incorrect questions** :x:
- **Selection of answered and unanswered questions from the dropdown menu** :arrow_down_small:

## :camera: Sample Screenshots

### :book: Study Mode

![Study Mode Sample](relative/path/to/study_mode_img.jpg?raw=true "Study Mode Sample")

### :bell: Quiz Mode

![Quiz Mode Sample](relative/path/to/quiz_mode_img.jpg?raw=true "Quiz Mode Sample")

Caught a bug 🐞:? Have some new ideas :bulb:? Feel free to contribute. If you find this project useful, do not forget to star :star: it. This app was created to aid preparation for the electronics engineering board exam in the Philippines. Happy learning! :tada:
