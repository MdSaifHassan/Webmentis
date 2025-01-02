// module/OurCompany/textContent.js

const textContent = {
    leftSection: {
      heading: {
        variant: 'h4',
        color: 'black',
        text: 'Our Company',
        sx: { fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } },
        gutterBottom: true,

      },
      paragraphs: [
        {
          variant: 'body1',
          text: 'At AONE INFO SYSTEMS, we are transforming the future of technology by providing cutting-edge IT solutions to help businesses navigate the ever-evolving digital landscape. Founded in [year], we specialize in delivering innovative, reliable, and scalable technology solutions that drive success for our clients across various industries.',
          paragraph: true,
          color: 'black',
          sx:{
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive paragraph font size
            marginBottom: { xs: '0.8rem', md: '1.2rem' },
          }
        },
        {
          variant: 'body1',
          text: 'Our team of experienced engineers, developers, and IT specialists are committed to delivering high-quality software, secure networks, and seamless IT services that empower organizations to unlock their full potential.',
          paragraph: true,
          color: 'black',
          sx:{
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive paragraph font size
            marginBottom: { xs: '0.8rem', md: '1.2rem' },
          }
        },
        {
          variant: 'body1',
          text: 'From custom software development to IT infrastructure management, cloud services, and cybersecurity solutions, we offer a comprehensive range of services designed to meet the unique needs of every client.',
          paragraph: true,
          color: 'black',
          sx:{
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive paragraph font size
            marginBottom: { xs: '0.8rem', md: '1.2rem' },
          }
        },
      ],
    },
  };
  
  export default textContent;
  