import React from "react";
import TwoCards from "../components/TwoCards";
import FlipCard from "../components/FlipCard";
function Aus() {
  return (
    <div>
      <TwoCards
        h1="ABOUT US"
        h2="Event Organiser platform"
        buttxt="Share Event"
        link="https://media.istockphoto.com/vectors/group-of-programmers-work-together-vector-id623897990"
        p="This is a map based event sharing platform on a website. Here you can share the events planned or
                        to be planned in the map by sharing the event location by pinning the location.Here you can also
                        chat with your friends. This is the platform which you can interact and connect with lot of
                        users. There is a membership plans for the users.Build your community
                        Easy hosting tools
                        Host safe events
                        We’ll help you grow
                        Connect with other people who are curious about the things you love.
                        Chat with members and manage your attendance.
                        Easy-to-use features for indicating whether events will be outdoors, have mask or vaccination
                        requirements, & more.
                        Our platform will keep promoting your group throughout its network to get more people
                        interested."
      />

      <div className="container px-50px">
        <div className="row g-3">
          <div className="col-12 col-md-3">
            <FlipCard
              src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=256"
              h2="Pursue your hobbies"
              p="Find what you enjoy most, meet others who love it, make new friends. Live your life restrictionless!"
            />
          </div>

          <div data-aos-duration="2000" className="col-12 col-md-3">
            <FlipCard
              src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256"
              h2="Create your event"
              p="The best thing about MAPTY is that you are no longer a side character living in someone else's world. Create your own events and live your life to the fullest."
            />
          </div>

          <div className="col-12 col-md-3">
            <FlipCard
              src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=256 "
              h2="Friends"
              p="Too shy to attend events on your own? dont worry we also have support joining events with friends or
                meetup with strangers add as friends and there you go... having a blast with your new buddies at events
                that you all enjoy."
            />
          </div>
          <div className="col-12 col-md-3 pb-5">
            <FlipCard
              src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256"
              h2="Create your event"
              p="The best thing about MAPTY is that you are no longer a side character living in someone else's world. Create your own events and live your life to the fullest."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aus;
