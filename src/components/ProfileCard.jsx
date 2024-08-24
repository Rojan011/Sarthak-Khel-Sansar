import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { FaInstagram,FaFacebook,FaLinkedinIn  } from "react-icons/fa";
   
  export function ProfileCard() {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEHsrcexkaWAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704283655112?e=1729728000&v=beta&t=RIEdRu1i6PbG0O7zkXQviRSUKgNEdosHuLea72YUmL4" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Sandesh Koirala
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="https://www.facebook.com/sandesh.koirala.7"
              variant="lead"
              color="blue"
              textGradient
            >
              <FaFacebook />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="https://www.linkedin.com/in/sandesh-koirala-331936212/"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <FaLinkedinIn  />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="https://www.instagram.com/sun_desh7/"
              variant="lead"
              color="purple"
              textGradient
            >
              <FaInstagram />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
  }