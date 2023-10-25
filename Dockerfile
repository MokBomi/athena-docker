# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files to the container
COPY . .

# Expose the port on which the web app will run
EXPOSE 8000

# Set the command to run the web app when the container starts
CMD [ "gunicorn", "main:app", "-b", "0.0.0.0:8000" ]