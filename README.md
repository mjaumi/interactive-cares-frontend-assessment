# Interactive Cares Frontend Assessment

### Live Preview Link: [https://ed-tech-defe0.web.app](https://ed-tech-defe0.web.app)

This is an interactive learning platform project named `Ed Tech` created for Interactive Cares frontend assessment. Here, user can signup, login and watch video from the platform. Users also can add notes on specific video based on timestamps. Moreover, user can jump to a specific part of the video using the timestamp.

## Functionalities

### `Video Player`

In this project, I have used `react-player` library to play videos. I have taken first 10 videos of react playlist of `Anisul Islam` sir. There is a previous and a next button to navigate through the videos

### `Notes`

In this application, user can take note while watching the video. When the user pauses the video, an interface will shown up in the bottom of the video player which will take input as a note and save it to the database. Here, I have also added the feature of `editing` and `deleting` the notes. User will be shown the timestamp of the video when it is paused and after taking the note, the timestamp will also be saved in the database. Related notes to the currently playing video will appear below the input interface which will contain the timestamp and clicking on it, user will navigate to the same part of the video.

### `Progress Tracking`

For progress tracking, I have added a progress bar on the top of the video playlist with a number of how many videos the user have finished. Whenever an user presses the `Next` button or a video is finished playing, the progress bar updates itself by query.

### `Authentication`

I have also applied authentication in this application. User must signup and login to our system in order to watch videos.

### `Server`

I have used `http://localhost:9000` port for server.

## Libraries Used

- React Player
- React Router Dom
- React Query
- React Firebase Hooks
- React Icons
- React Loading Icons
- React Toastify
- Node Sass
- MongoDB
- Express
