# AI Interview Generator for Recruitment Agencies

## Overview

**AI Interview Generator** is a powerful tool designed specifically for recruitment agencies to streamline and enhance the candidate interview process. Leveraging advanced artificial intelligence, this solution generates tailored interview questions based on job descriptions, required skills, and candidate profiles, making interviews more effective, consistent, and unbiased.

## Features

- **Automated Question Generation**: Instantly produce relevant interview questions for any role or skillset.
- **Customizable Templates**: Adapt question templates to fit specific client or industry needs.
- **Skill & Role Matching**: AI analyzes job descriptions and candidate resumes to align interview questions with core competencies.
- **Bias Reduction**: Generate fair and consistent questions to ensure equal opportunity for all candidates.
- **Multi-language Support**: Create interview questions in multiple languages for global recruitment.
- **Easy Integration**: API and web-based platform for seamless integration with existing recruitment workflows.

## How It Works

1. **Input Job Description**: Upload or paste the job description and candidate profile.
2. **AI Analysis**: The AI model analyzes required skills, experience, and cultural fit.
3. **Question Generation**: Customized interview questions are generated instantly.
4. **Export & Share**: Download or share the interview set with hiring managers or clients.

## Use Cases

- Recruitment agencies conducting large-scale candidate screening.
- HR teams seeking to standardize interviews across departments.
- Staffing firms working with clients in various industries.
- Organizations aiming to reduce unconscious bias in interviews.

## Getting Started

1. **Clone the Repo**
   ```bash
   git clone https://github.com/arguimercado/smartcruiter.git
   cd smartcruiter
   ```

2. **Install Dependencies**
   ```bash
   # Example for Python
   pip install -r requirements.txt
   ```

3. **Configure API Keys (if applicable)**
   - Set up your AI provider API key in `.env` or configuration file.

4. **Run the Application**
   ```bash
   # Example for starting the app
   python app.py
   ```

5. **Access the Platform**
   - Open your browser and navigate to `http://localhost:8000` (or specified port).

## Example

Paste a job description like:
```
We are looking for a Software Engineer skilled in Python and Machine Learning...
```
The AI will generate questions such as:
- Can you explain your experience with machine learning frameworks?
- Describe a project where you used Python to solve a complex problem.

## Contributing

We welcome contributions! Please fork the repo and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please open an issue or contact [arguimercado](https://github.com/arguimercado).

### Configuration


FIREBASE_PROJECT_ID=prepcrew-4c93c
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@prepcrew-4c93c.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY_ID=cf9197cbebffb613919cc9c208a8f960a3cdaa7c
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCP/0agJ80YOx59\nghKJTV9kiOt4TF41HxWH5PtJge+f0pqK3wN25LQPoAeEcSyrZOV/e2Bo7DY/EIYe\nScUv7t36JFnF44jMbZj47qG1iyXpu7tC0XMHY+IY/1pl+azlYkxyxSZUYDxAx6px\nbVAWHJvgYVGzmMwV3kMIBknv+554zJxMfG+K4hupx7vPzRZ5URQfd23A7o4sUqXp\nny/egfmHlWGLY3RC8o7rhd9gkOcXIqCzRJyTGUFdeVakdAt8VUiKlle4Pe9QSPoI\ncPLhE4BYrOWpAb/BQc1SNa+NNDAyidp2TtoFd9MNDJiHbmLEj6aTkTuHnLLjfU4Z\no5EG9CkPAgMBAAECggEAI9v1+g8/V2/thWLde9zNSyt/vCsEcOUnRvrCi0k048+e\nFcQ4yCRnJNb82EIY1ivfrRIL7cUZMzZJuAQ1+1xYYiEoTAwANqx6Yk+G7L9UtzK9\njQO8yhPZK9F3cRqusEb8873d8Dgw+Q7gBrQqs/724HdL0dZUyINbnQV35y/5hGpM\nR3KpbRUXBgy1kqZvxrrLQslPk+wYrPKnZiyXuw/D/1KAkW3A8CjrDJddnqNRaGQL\nBchbJuX6UveWwuVE3yHyPKAcA7QMwkUAxYwqFfAuTvhcM0mzKSb0tWZoK+GPIJ8T\nn1LNJJWgCavkP4lbL0bTWNRsgJ6maCFfv9y+8kVUPQKBgQDAidfXaEClB8msu3Vx\nup1I2q/j/z1Yx9aNQbAogZBM5v+cwW5r5/tE42+qwOCEez1I6F2hi7ptjcFuNxJj\nlzpsTkwEkXlPPzPDC5/OTRzGYJc7QJbfueTjPvrA1W+XQh6GWB4mpTWmL3CZs+Q6\nIlhiVZJCXlsGn4oO1nHKsJtbiwKBgQC/dZReioJ3dD+9wjgfxBjdlqJ3hKn1zziu\nYSzbFmWxgRKA/PZaMoO6ia0fhLvj10h2fA07PhCTR+mCuooW8a4Q0CuqK9tq1PyK\nV1ExF/ii4JGowC5aLyfuD8MHdyuVFd+slFxAuPUb6ZotV/sl2u1+jTqA5cIXk0za\npmw/Hh3pDQKBgQCvAhxxLc/ksel82n/sOkYRHMZYJX7rnenFR/oJN4ukeyvInoHy\nD1Dz0w+DVAJAKY0RIjVJS6rPPdSei+xpHeL640hxtpFfmQFBvuUpLiqDnvSX5SO+\nhEgqzuo6MUdXY8A/OQVe9ziGsARXkY5X0TQpXcKuFPoEUSu6RO314QW19QKBgE70\n22odru46V6sW9HRNN3/yhi/J2xmPCq4HTytO0kNgmlPtfl72JBMCgg3UfHParXyH\nbiF3V/iVGHycFySdKI6wesFj8snc6gTXO5mGbDgnaopwLu1sMwhfIavrfmKuMZ8H\nVAAxBowrSzTV6rHS1kxxS6Yqml+ElJY7ObrR3b3lAoGBALu7B5WSk9bAuRrVEei1\nCuxprorJS6DD/MoJrmfHe1vFs6Fmw7qv6WPCn3hjAsnbf0sX9h/FXgCAe7hnhuHV\nngIHpVIYMTWhMZ2OIrn9EgeAicTnN3hSxg4koDP+H4HcxwIZGPdLHJCcbaDxYFQo\nOHcOrwrc/GfHpHTefrz9n0fZ\n-----END PRIVATE KEY-----\n


FIREBASE_CLIENT_API_KEY=AIzaSyBtO4vPSMmgZvWovlUf4Q3YTszqzJXQelU
FIREBASE_CLIENT_AUTH_DOMAIN=prepcrew-4c93c.firebaseapp.com
FIREBASE_CLIENT_STORAGE_BUCKET=prepcrew-4c93c.firebasestorage.app
FIREBASE_CLIENT_MESSAGING_SENDER_ID=947045032043
FIREBASE_CLIENT_APP_ID=1:947045032043:web:16f699570b2d71899f512e
FIREBASE_CLIENT_MEASUREMENT_ID=G-G6F4XW8K00