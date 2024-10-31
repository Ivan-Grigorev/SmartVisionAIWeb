# SmartVisionAIWeb

**Effortlessly add SEO-friendly titles, descriptions, & keywords to your images, now powered by AI with a Django web interface!**

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)
6. [Credits](#credits)

## Introduction

**SmartVisionAIWeb** is a Django-based web application that brings the core functionalities of [GPT Image Describer](https://github.com/Ivan-Grigorev/GPTImageDescriber) into an accessible, user-friendly online interface. This tool leverages OpenAI's GPT model to generate SEO-optimized titles, descriptions, and keywords for your images. With Docker support, this app can be set up quickly and accessed via any web browser.

## Features

- Generates SEO-friendly titles, descriptions, and keywords for images.
- Provides a Django web interface with three main options based on the GPT Image Describer CLI functionality.
- Supports common image formats, such as JPG and JPEG.
- Saves processed metadata in the form of a downloadable CSV file or directly adds it to images.
- Easily configurable through Docker for local or server-based deployment.

## Installation

### Prerequisites

- **Docker** and **Docker Compose**: Make sure you have both installed.

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Ivan-Grigorev/SmartVisionAIWeb
cd SmartVisionAIWeb
```

### Add API Keys

Update the `docker-compose.yml` file to include your environment keys. Add your `OPENAI_API_KEY` from OpenAI and a unique `DJANGO_SECRET_KEY`:

```yaml
environment:
  - OPENAI_API_KEY=your_openai_api_key
  - DJANGO_SECRET_KEY=your_secret_key
```

### Start the Application

Run the following command to build and start the containers:

```bash
docker-compose up --build
```

This will launch the Django application and make it accessible at `http://localhost:8000` by default.

## Usage

Once the application is up, navigate to `http://localhost:8000`. You’ll see three main buttons on the homepage, corresponding to the functionalities from GPT Image Describer:

1. **Add Metadata**
2. **Generate CSV**
3. **Generate CSV Based on Captions**

Clicking any button opens a new window where you can input specific details like a prompt message, the source folder, destination folder, and author name. Each option enables tailored metadata generation for images, saving results either directly in images or in a CSV file.

## License

This project is licensed under the terms of the [LICENSE](./LICENSE).

## Credits

This repository and project were created by [Ivan Grigorev](https://github.com/Ivan-Grigorev). The core image processing functionalities are based on the [GPT Image Describer](https://github.com/Ivan-Grigorev/GPTImageDescriber), designed for educational and personal use.
