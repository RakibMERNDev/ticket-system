import React from 'react';

const ProgressBox = ({classes,label ="Default", count = 0}) => {
    return (
      <div
       
        style={{
          backgroundImage:
            "url(/victor1.png)",
        }}
      >
        
        <div className={`h-full ${classes} space-y-3` }>
          <div>
            <h1 className='text-xl'>
                {label}
            </h1>
            <p className="mb-5 text-5xl font-bold">{count}</p>
            
            
          </div>
        </div>
      </div>
    );
};

export default ProgressBox;