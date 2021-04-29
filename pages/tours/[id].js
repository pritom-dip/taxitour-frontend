import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';

const singleTour = ({ singleTodo }) => {
    console.log(singleTodo);
    return (
        <>
            <Layout title="Single page">
                Single Tour
            </Layout>

        </>
    );
};

export default singleTour;

export const getServerSideProps = async (context) => {

    const res = await fetch(`http://127.0.0.1:8000/api/tour/${context.query.id}`);
    const singleTodo = await res.json();

    return {
        props: {
            singleTodo
        }
    }
}