import '../estilos/team.css'; // Asegúrate de crear este archivo para estilos

import person1 from '../imagenes/persona1.jpg';
import person2 from '../imagenes/persona2.jpg';
import person3 from '../imagenes/persona3.jpg';

const teamMembers = [
  { imgSrc: person1, alt: 'Person 1' },
  { imgSrc: person2, alt: 'Person 2' },
  { imgSrc: person3, alt: 'Person 3' },
];

const team = () => {
  return (
    <div className="team-section">
      <h1 className="team-title">QUIENES SOMOS</h1>
      <h2 className="team-subtitle">EQUIPO DE TRABAJO</h2>
      <div className="team-gallery">
        {teamMembers.map((member, index) => (
          <div className="team-item" key={index}>
            <img src={member.imgSrc} alt={member.alt} className="team-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default team;