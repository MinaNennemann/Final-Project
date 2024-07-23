import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Spin, Typography } from 'antd';
import './QuoteOfTheDay.css';

const { Title, Paragraph } = Typography;

const QuoteOfTheDay = () => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);
    const [author, setAuthor] = useState('');

    const fetchQuote = () => {
        setLoading(true);
        axios.get('/api/api/random') 
            .then(response => {
                console.log(response);
                const data = response.data;
                if (data && data.length > 0) {
                    setQuote(data[0].q);
                    setAuthor(data[0].a);
                } else {
                    setQuote('No quote found.');
                    setAuthor('');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the quote of the day:', error);
                setQuote('Error fetching quote.');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quote-of-the-day">
            <Card className="quote-card" bordered={false}>
                {loading ? (
                    <Spin size="large" />
                ) : (
                    <div className="quote-content">
                        <Title level={5}>"{quote}"</Title>
                    </div>
                )}
            </Card>
            <button className="btn" type="primary" onClick={fetchQuote} disabled={loading}>
>            </button>
        </div>
    );
};

export default QuoteOfTheDay;