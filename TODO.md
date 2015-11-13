# TODO's

TASK: 1 **HIGH PRIORITY**
- Set up users snippets page
  - hook up users page to db (getSnipsByUser)
  - look in userController.js to send out users Snips

TASK: 2 **HIGH PRIORITY**
- Set up auth for users
  - /auth/github
    - Please decide on what this route should do
      - On success, do we redirect or do we send a confirm token?
    - All of the logic lives in the authController.js file
  - Reflect auth on the view
  - Need to reflect session on view

TASK: 4 **HIGH PRIORITY**
- deploy to heroku

TASK: 3 **MEDIUM PRIORITY**
- Get downloads hooked up to the downloads page
  - /download/:snippetID
    - Need to get snippet by id
    - write snippet
    - send snippet out

TASK: 5 **LOW PRIORITY**
  - /api/user/:userId/download
    - getSnippetsByUser
    - write all snippets to folder
    - zip up folder
    - send zip file out

TASK: 6 **LOW PRIORITY**
  - Have user be able to update their Snippets
    - /api/user/:userId/update/:snipId
    - ON GET
      - takes snip id
      - retrieves snip from db
    - ON post
      - posts snip
      - updates db with new snip
