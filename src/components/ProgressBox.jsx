

const ProgressBox = ({classes,label ="Default", count = 0}) => {
    return (
      <div
        className={`h-52 bg-cover bg-center`}
        style={{
          backgroundImage: "url(/victor1.png)",
        }}
      >
        <div
          className={`h-full ${classes} space-y-3 flex justify-center items-center rounded-md`}
        >
          <div>
            <h1 className="text-xl">{label}</h1>
            <p className="mb-5 text-5xl text-center font-bold">{count}</p>
          </div>
        </div>
      </div>
    );
};

export default ProgressBox;