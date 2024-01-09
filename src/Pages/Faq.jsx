// FAQPage.js
import React from 'react';

const FAQPage = () => {
  const faqData = [
    {
      question: 'What types of glasses do you offer?',
      answer:
        'We offer a wide range of glasses including prescription eyeglasses, sunglasses, reading glasses, and more. Our collection features various styles, materials, and brands to cater to different preferences.',
    },
    {
      question: 'How do I place an order?',
      answer:
        'To place an order, simply browse our collection, select the glasses you like, and proceed to the checkout. Follow the steps to provide your prescription details and shipping information. Once the order is confirmed, we will process it and ship your glasses to you.',
    },
    {
      question: 'Do you offer prescription lenses?',
      answer:
        'Yes, we provide prescription lenses for our eyeglasses. During the ordering process, you can input your prescription details, and we will customize the lenses according to your requirements.',
    },
    {
      question: 'Can I return or exchange my glasses?',
      answer:
        'We offer a hassle-free return and exchange policy. If you are not satisfied with your glasses, you can return them within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges page for more details.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and location of your package.',
    },
  ];

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg pt-80">
      <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index}>
            <h2 className="text-xl font-medium mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
