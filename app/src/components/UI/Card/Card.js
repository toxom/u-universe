import React, { useState, useEffect } from 'react';
import './Card.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Card = ({ children, fixedText, additionalText }) => {
    const [expanded, setExpanded] = useState(false);
  
    useEffect(() => {
      const container = document.querySelector('.card-container.expanded');
      if (container) {
        const maxHeight = window.getComputedStyle(container).getPropertyValue('height');
        container.style.maxHeight = '0';
        setTimeout(() => {
          container.style.maxHeight = maxHeight;
        }, 10);
      }
    }, [expanded]);
  
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className={`card-container ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
        <div className="card-fixed-text">
          {fixedText} {/* This text will always show and not move */}
        </div>
        <div className="card-arrow">
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <div className="card-content">
          {expanded && (
            <p className="additional-text">
              {additionalText}
            </p>
          )}
          {expanded && children} {/* Optional: any common content */}
        </div>

      </div>
    );
  };
  

export default Card;
