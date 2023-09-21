import { userAxios } from '../../../../utils/axiosOptions';
import { notificationToggled } from '../../../UI/Notification/actionCreators';
import { animeDeleted } from '../actionCreators';

export const deleteAnime = (_id) => async (dispatch) => {
  try {
    await userAxios.delete('/savedAnimes/' + _id);
    dispatch(animeDeleted(_id));
    dispatch(notificationToggled({ color: 'green', message: 'Удалено!' }))
  } catch (err) {
    const { response } = err;
    if (response && response.status === 401) {
      return;
    } else {
      dispatch(
        notificationToggled({ color: 'red', message: 'Не удалось удалить' })
      );
    }
  }
};
