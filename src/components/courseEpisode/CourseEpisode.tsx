
import { ReactNode } from 'react';
import { Progress } from '@mantine/core';
import { Image } from '../../typings/common';
import useStyles from './style';

interface CourseEpisodeProps {
  episodeThumbnail: Image;
  playImage: Image;
  title: string;
  subTitle: string | ReactNode;
  tag: string;
  progress: number;
  time: string;
  onClickPlay: () => void;
  className?: string;
};

const CourseEpisode = ({
  episodeThumbnail,
  playImage,
  title, 
  subTitle,
  tag,
  progress,
  time,
  onClickPlay,
  className
}: CourseEpisodeProps) => {

  const backgroundImage = episodeThumbnail.image;
  const {classes} = useStyles({backgroundImage});

  return (
    <div className={classes.main}>
      <div className={classes.image} style={{width: episodeThumbnail.width, height: episodeThumbnail.height}}>
        <img
          style={{width: playImage.width, height: playImage.width, cursor: "pointer"}}
          src={playImage.image}
          alt="play"
          onClick={onClickPlay}
        />
      </div>
      <div className={classes.information}>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}<br/>{tag}</div>
        <div className={classes.progressBar}>
          <Progress value={progress} size={4} radius={22}/>
        </div>
      </div>
      <div className={classes.duration}>
        <div className={classes.time}>{time}</div>
      </div>
    </div>
  )
};

export default CourseEpisode;
