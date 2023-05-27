import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useQuery } from 'react-query';
import axios from '../utils/axios';

// custom hook to get user's watched video list and added notes
const useGetUserInfo = () => {
    // integration of react-firebase hooks here
    const [user] = useAuthState(auth);

    // integration of react-query hook to fetch user details
    const { data } = useQuery('user', () => axios.get(`/user?email=${user.email}`), { enabled: !!user });

    return {
        addedNotes: data?.data.added_notes,
        watchedVideos: data?.data.watched_videos,
    }
}

export default useGetUserInfo;