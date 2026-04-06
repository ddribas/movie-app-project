import styles from './Avatar.module.css';

interface IAvatar {
    name: string;
    avatar: string;
}


function Avatar ({ name, avatar }: IAvatar) {
    return (
        <div className={styles.avatar}>
            <img src={(avatar) ? `https://image.tmdb.org/t/p/w500/${avatar}` : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"} alt={name}/>
            <p>{name}</p>
        </div>
    );
}

export default Avatar;