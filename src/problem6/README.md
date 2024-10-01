
## Documentation

### Purpose 
- Show scoreboard with top 10 user's scores and update in real time.

### Functionality 
- Show the top 10 user score  GET /scoreboard
- Receive action from user via API request (POST /action)
- Verify if user is authorized and logged in. If not log error and notify admin, prompt the user to log in
- If user is authorized and completed the action, fetch and show scoreboard  GET /scoreboard
- If user did not complete the action, go back to homepage and do not update the scoreboard
- Admin can verify users, review actions, fix issues, delete or approve users

### Endpoints

POST /action 
- Receive an action
- If completed, respond with success message and fetch it with GET /scoreboard 
- If user is not authorized, return an error and prompt the user to login or get permission, notify the admin
- If action is not completed, prompt the user to retry and redirect to homepage

GET /scoreboard  
- show scoreboards of top 10 users

### Admin endpoints
GET /admin/action 
- allow admin to check users actions
PUT /admin/scoreboard 
- allow admin to fix any issues or problems with scores
DELETE /admin/delete 
- allow admin to delete a user or reset the scoreboard
POST /admin/approve 
- allow admin to approve user actions or give authorization for the user


### Security:

- Verify if user is logged in and has authorization before update scoreboard
- User with no authorization should not be able to make score
- Maybe has a jwt token to verify users identity
- Only admin can give authorization and have access to edit, delete and verify users and actions


### Suggestion for improvement
- Ensure actions and score updates are atomic and transaction to prevent issues with simultaneous updates


- Add limiting actions on the POST /action to prevent spamming

- Provide detailed error messages when user does not have authorization or when issues happen. To help troubleshooting and giving user a good ux.

- Log important events like admin actions or failed authorization attemps, score updates. To help view what is happening

- Maybe another way to make the real-time communication, because constant request to the GET /scoreboard may not be a good idea
