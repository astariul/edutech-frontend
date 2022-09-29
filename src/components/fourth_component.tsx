// Import Swiper React components
import { createStyles, Text, Container } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import btn_image from "../img/btn_play.png";

const useStyles = createStyles((theme) => ({
    container: {
      position: 'relative',
      width: '100%',
      height: '600px',
      paddingTop: '50px',
      paddingLeft: 0,
      paddingRight: 0,
    },

    suptitle: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        fontSize: theme.fontSizes.xl * 2.2,
        lineHeight: 1.2,
    },

    sidetitle: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 700,
      lineHeight: 1.2,
      color: theme.colors.blue[6],
      position: 'absolute',
      bottom: 0,
      right: '30px',
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: theme.colors.gray[0],
        transition: 'all 300ms ease',
        padding: 0,

        '&:hover': {
          transform: 'scale(1.01) translateY(-20px)',
          boxShadow: theme.shadows.sm,
        },
      },
    
    img_box: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },

    thumb_image: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
    },

    btn_image: {
      position: 'relative',
      marginTop: '30%',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '40px',
    },

    description: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      width: '100%',
      position: 'absolute',
      top: "60%",
    },
}));

export function CarouselSecond() {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
          <Container style={{position: "relative"}} size="lg" mt='xl' mb='xs'>
          <div style={{display: 'flex'}}>
          <Text className={classes.suptitle}>산타 졸업생들의 성공 후기</Text>
          <Text className={classes.sidetitle}>더보기</Text>
          </div>
          </Container>
          <Container size="xl">
          <Swiper
            style={{
                width: "100%",
                height: "400px",
                backgroundColor: "transparent",
                borderRadius: "12px",
                marginTop: "0px",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            slidesPerView={3.2}
            centeredSlides={true}
            spaceBetween={20}
            roundLengths={true}
            // pagination={{ clickable: true }}            
            navigation = {true}
            autoplay = {{delay: 1000}}
            loop = {true}
            loopFillGroupWithBlank={true}
            breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 20,
                },
              }}
            modules={[Navigation]}
            >
            <SwiperSlide className={classes.card}>
              <a className={classes.img_box} href="https://youtu.be/HDBQEI1aTYw" target="_blank" rel="noreferrer">
              <img className={classes.thumb_image} src="https://img.youtube.com/vi/HDBQEI1aTYw/maxresdefault.jpg" alt="" />
              <img className={classes.btn_image} src= {btn_image} alt="재생"/>
              </a>
              <Container className={classes.description} px={0} mx={0}>
                  <Text px="md" mb={5} size="sm" color="blue" align="left">IT 개발자</Text>
                  <Text px="md" mb={5} size="md" weight={700} align="left" style={{lineHeight: 1.2}}>토익 만점을 받은 <br/>남다른 공부 방식</Text>
                  <Text px="md" size="sm" color="dimmed" align="left" style={{lineHeight: 1.2}}>사실 제가 특별한 노력을 하지 않더라도 문제를 계속 풀고 틀리다보면 어떤 유형에 약한지 알아서 분석해주니까 좋았어요</Text>
              </Container>

            </SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 2</SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 3</SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 4</SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 5</SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 6</SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 7</SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 8</SwiperSlide>
            <SwiperSlide className={classes.card}>Slide 9</SwiperSlide>
          </Swiper>
          </Container>
        </div>
      );
    }
