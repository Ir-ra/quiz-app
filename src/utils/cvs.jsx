export const generateCVSFile = (email, answers) => {
  let csvContent = 'order,title,type,answer\n';
  
  Object.keys(answers).forEach((key, index) => {
    const question = answers[key].question;
    const answer = Array.isArray(answers[key].answer) ? answers[key].answer.join(',') : answers[key].answer;
    const type = answers[key].type;

    csvContent += `"${index + 1}","${question}","${type}","${answer}"\n`;
  });

  csvContent += `"${Object.keys(answers).length + 1}","Email","${email.type}","${email.email}"\n`;

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.setAttribute('download', 'data.csv');

  document.body.appendChild(link);
  link.click();
}
