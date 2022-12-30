# Import Python
FROM python:3.9-slim

# Declare port as environment variable
ENV PORT 8080

# Copy local code to container
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

# Install dependencies
RUN pip install -r requirements.txt

# Run service
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 __init__:app