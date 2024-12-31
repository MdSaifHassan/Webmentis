const formFields = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      id: 'email',
      label: 'E-Mail',
      type: 'email',
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
    },
    {
      id: 'message',
      label: 'Your Message Here',
      type: 'textarea', // Special handling for multiline input
      rows: 4,
    },
  ];
  
  export default formFields;
  