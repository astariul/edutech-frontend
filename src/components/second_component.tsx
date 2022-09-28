// Import Swiper React components
import { createStyles, Text, Container, Space, BackgroundImage } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import bg_phone from "../img/bg_phone.jpg"
import card_off from "../img/card_01.jpg";
import card_on from "../img/card_01_on.jpg";

const useStyles = createStyles((theme) => ({
    container: {
      position: 'relative',
      backgroundImage: 
      `url(${bg_phone})`,
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '850px',
    },

    suptitle: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        fontSize: theme.fontSizes.xl * 2,
        lineHeight: 1.2,
    },

    sidetitle: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        fontSize: theme.fontSizes.xl * 1.5,
        lineHeight: 1.2,
        color: theme.colors.blue[6],
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: theme.shadows.md,
        transition: 'all 300ms ease',
        '&:hover': {
          transform: 'translateY(-20px)',
        },
      },
}));

export function CarouselFirst() {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
          <Container style={{position: "relative"}} size="md" my="xl">
          <Text color="dimmed">비교할 수 없는 경쟁력</Text>
          <div style={{display: 'flex'}}>
          <Text className={classes.suptitle}>산타를<br/>더욱 산타답게<br/>만드는 모든 것</Text>
          <Space w="xl"/>
          <Text className={classes.sidetitle}>AI 관련 26개 특허 등록. <br/>압도적인 기술력!</Text>
          </div>
          </Container>
          <Container size="xl">
          <Swiper
            style={{
                width: "100%",
                height: "400px",
                backgroundColor: "transparent",
                borderRadius: "12px",
                marginTop: "100px",
                paddingTop: "50px",
                paddingBottom: "50px",
              }}
            slidesPerView={4}
            centeredSlides={true}
            grabCursor={true}
            spaceBetween={50}
            roundLengths={true}
            // pagination={{ clickable: true }}            
            navigation = {true}
            loop = {true}
            loopFillGroupWithBlank={true}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            modules={[Navigation]}
            >
            <SwiperSlide className={classes.card}>
                {({isActive}) => (
                    <BackgroundImage
                        src={isActive ? card_on : card_off}
                        style={{width: "100%", height: "100%", borderRadius: "12px"}}>
                    <Text size='xl' weight={700} mt={200} color = {isActive? 'white':'black'}>AI 연구 성과</Text>
                    <Text size='sm' px={64} color={isActive? 'white':'dimmed'}>뤼이드는 '학습효과 극대화'를 목표로 AI를 연구하고<br/> 검증합니다.</Text>    
                    </BackgroundImage>
                )}
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
