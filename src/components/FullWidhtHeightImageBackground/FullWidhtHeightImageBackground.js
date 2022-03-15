import React from "react";
import Button from "../../ui/Button/Button";
function FullWidhtHeightImageBackground(props) {
  
  let classes = ['justify-center' ,'flex'];
  classes = props.classes ? classes.concat(props.classes): classes;
  return (
    <section
      id={props.id}
      style={{
        backgroundImage: `url(${props.bgimage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100wh",
        position: "relative",
      }}
      className={classes.join(' ')}
    >
      <div className=" absolute top-[60%] flex  flex-col  mt-3 md:mt-2 lg:mt-2">
        <h1 className="text-4xl text-center md:text-6xl lg:text-9xl font-Baby text-white">
            {props.mainHeading || 'Placeholder'}
        </h1>
        <h1 className="text-4xl text-center md:text-6xl lg:text-5xl font-Baby text-white">
        {props.subHeading || 'Placeholder'}
        </h1>
        <div className="mt-10 flex justify-center">
          <Button variant="secondary" text="Book Appointment" />
        </div>
      </div>
    </section>
  );
}

export default FullWidhtHeightImageBackground;
