import React from "react";
import { Button } from '@mantine/core';
import { useLocalStorage } from "@mantine/hooks";
import { UserProfile } from "./LocalStorage";

const { IMP } = window;
IMP.init(process.env.REACT_APP_IAMPORT_ID && 'imp15438774');

interface PaymentButtonProps {
    courseName: string;
    email: string;
    name: string;
    tel: string;
    price: number;
    merchantUID: string;
}

const IamPortPaymentButton = (props: PaymentButtonProps) => {

    const [login] = useLocalStorage<UserProfile | null>({ key: 'login', defaultValue: null });

    const payCallback = (resposne: any) => {
        if (resposne.success) {
            // TODO: 결제성공 로직 구햔 
            alert('결제 성공')
        } else {
            // TODO: 결제실패 로직 구현
            alert('결제 실패')
        }
    };

    const requestPay = () => {
        IMP.request_pay({
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: props.merchantUID,
            name: props.courseName,
            amount: props.price,
            buyer_email: props.email,
            buyer_name: props.name,
            buyer_tel: props.tel,
        }, payCallback)
    }

    const onClickHandler = () => {
        if (login) {
            requestPay()
        }else {
            // TODO: 디자인된 Modal 적용
            alert("결제를 진행하려면 로그인이 필요합니다.")
        }
    }

    return (
        <>
            <Button
                color="blue"
                variant="light"
                fullWidth mt="md"
                radius="md"
                onClick={onClickHandler}
                >
                결제하기
            </Button>
        </>
    );
}

export default IamPortPaymentButton;
