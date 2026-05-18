# CAMPAIGN_STRATEGY.md

## Technical Specification for ProductHunt Launch

### 1. File Tree
```
.
|-- backend/
|   |-- app.py
|   |-- requirements.txt
|   `-- tests/
|       `-- test_app.py
|-- frontend/
|   |-- public/
|   |   `-- index.html
|   |-- src/
|   |   |-- App.js
|   |   |-- index.js
|   |   `-- components/
|   |       `-- ProductHuntWidget.js
|   |-- package.json
|   `-- README.md
|-- .github/
|   `-- workflows/
|       `-- ci-cd.yml
`-- README.md
```

### 2. Tech Stack
*   **Backend:** Python 3.9+, FastAPI
*   **Frontend:** React 18+, JavaScript, HTML5, CSS3
*   **Database:** SQLite (for MVP, can be upgraded)
*   **Deployment:** Docker, GitHub Actions, AWS/GCP (TBD)

### 3. API Contracts

#### Endpoint: `/api/producthunt/upvote`
*   **Method:** `POST`
*   **Description:** Records a user upvote for the product on ProductHunt.
*   **Request Body:**
    ```json
    {
        "user_id": "string",
        "product_id": "string"
    }
    ```
*   **Response:**
    *   **Success (200 OK):**
        ```json
        {
            "message": "Upvote recorded successfully."
        }
        ```
    *   **Error (400 Bad Request):**
        ```json
        {
            "error": "Invalid request data."
        }
        ```
    *   **Error (500 Internal Server Error):**
        ```json
        {
            "error": "Failed to record upvote."
        }
        ```

### 4. Dependency List (Exact Versions)

#### Backend (requirements.txt)
*   `fastapi==0.110.0`
*   `uvicorn==0.29.0`
*   `SQLAlchemy==2.0.29`
*   `pydantic==2.7.1`
*   `pydantic-settings==2.2.1`

#### Frontend (package.json)
*   `react==18.2.0`
*   `react-dom==18.2.0`
*   `react-scripts==5.0.1`
*   `axios==1.6.8`
*   `web-vitals==2.1.4`
