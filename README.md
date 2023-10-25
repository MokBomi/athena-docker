# athena-docker

Athena is a Quiz Web Application that automates the process of fetching questions from IndiaBIX, saving users valuable time. This web app allows users to input multiple URLs to answer questions in bulk. This version of the web app is designed for running within a Docker environment.

## Instructions

### Step 1: Install Docker

Install Docker by visiting the [Docker website](https://www.docker.com/get-docker/) and following the instructions provided for your specific operating system. If you are running a lower version of the operating system that does not support Docker Desktop, consider using [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install/) instead.

### Step 2: Clone and Run

After installing Docker, run the following commands in your terminal:

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

## Features

### Study Mode

- Reset button to reset questions to question number 1 and remove selected options.
- Shuffle button to change the order of questions.
- Favorites button to mark and revisit favorite questions.
- Search button to navigate through questions.

### Quiz Mode

In quiz mode, it's quite similar to Study Mode, but with additional features. These additional features in Quiz Mode include:

- Scoring system
- Review of incorrect questions
- Selection of answered and unanswered questions from the dropdown menu

## Sample Screenshots

### Study Mode

![Study Mode Sample](relative/path/to/study_mode_img.jpg?raw=true "Study Mode Sample")

### Quiz Mode

![Quiz Mode Sample](relative/path/to/quiz_mode_img.jpg?raw=true "Quiz Mode Sample")

If you encounter issues or have suggestions, feel free to contribute. Don't forget to star this project if it helped you. I created this app to help with my preparation for the electronics engineering board exam in the Philippines.
