import React from 'react';
import PieChart from '../Home/PieChart'; // Ensure you have the PieChart component

const GraphSection = ({ pieData, titles, styles }) => {
  return (
    <div className="additional-section mt-5">
      <h2 className="text-center">Overwhelming Positive Feedback</h2>
      <div className="row justify-content-center">
        {pieData.map((data, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-3" key={index}> {/* Full width on small screens, 2 columns on large screens */}
            <PieChart data={data} />
            <div style={styles.title}>{titles[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphSection;
