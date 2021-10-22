import React from "react";
import Nav from "../components/Nav/Nav";
import "./Main.scss";
import ThreeInOne from "../components/pictureAndText/ThreeInOne";
import Section from "../components/common/section/Section";
import Heading from "../components/common/Heading";
import InnerDiv from "../components/common/innerDiv/InnerDiv";
import DoubleImg from "../components/doubleRoundImg/DoubleImg";
import ParagraphBox from "../components/common/ParagraphBox";
import SidebySide from "../components/sideByside/SideBySide";

import illustration1 from "../images/illustrations/Clinician_Illustrations-01.svg";
import illustration2 from "../images/illustrations/Clinician_Illustrations-02.png";
import illustration3 from "../images/illustrations/Clinician_Illustrations-03.png";
import illustration4 from "../images/illustrations/Clinician_Illustrations-04.svg";
import illustration5 from "../images/illustrations/Clinician_Illustrations-05.png";
import illustration6 from "../images/illustrations/Clinician_Illustrations-06.png";
import illustration7 from "../images/illustrations/Clinician_Illustrations-07.svg";
import illustration8 from "../images/illustrations/Clinician_Illustrations-08.svg";
import illustration9 from "../images/illustrations/Clinician_Illustrations-09.png";
import illustration10 from "../images/illustrations/Clinician_Illustrations-10.svg";

const Main = () => {
  const welcome = [
    {
      heading: "Opioids and Children’s Pain",
      mainImg: `${illustration1}`,
      imgWidth: "95%",
      maxwidth: "60%",
    },
    {
      message:
        "Opioids are one of many effective pain management tools for children with moderate to severe pain, but there is still uncertainty about the future harms from short-term prescribing. This is why healthcare providers need to prescribe responsibly.",
    },
  ];

  const consideration = [
    {
      heading: "When to Consider Prescribing Opioids",
    },
    {
      content:
        "Use non-opioid treatments first. Consider your patient's pain and the treatment context when developing your treatment plan.",
    },
    {
      content:
        "Always use physical and psychological interventions when treating pain.",
    },
    {
      content:
        "When opioids are required to treat moderate and severe pain, add them to non-opioid treatment and interventions.",
    },
    {
      maxwidth: "80%",
      imageOne: `${illustration2}`,
      imageTwo: `${illustration3}`,
    },
  ];
  const potentialRisk = [
    {
      heading: "Potential Risks",
      mainImg: `${illustration4}`,
      imgWidth: "80%",
      maxwidth: "60%",
      justify: "center",
    },
    {
      message:
        "Clinicians worry about the long-term eects of opioid use in children and youth. Asystematic review led by researchers at the University of Alberta shows that it is still unclear whether short-duration (≤2 weeks) therapeutic opioid use in children results in increased risk of non-medical use in the future. Some research indicates that exposure to therapeutic opioids at some point in a child's lifetime may be associated with non-medical opioid use.",
      other:
        "Other factors that may increase or decrease the risk of future harm are also unclear.",
    },
  ];
  const guidance = [
    { heading: "Prescribing Guidance for Children and Youth" },
    {
      maxwidth: "50%",
      imageOne: `${illustration5}`,
      imageTwo: `${illustration6}`,
    },
    {
      heading: "Health Canada recommends",
      list1: "No hydrocodone under 6",
      list2: "No codeine under 18",
      list3: "Limited tramadol under 18",
    },
    {
      size: "35%",
      spacing: "2% 0",
      background: "#F2F2F2",
    },
  ];
  const talking = [
    {
      heading: "Talking with Patients and Families",
      mainImg: `${illustration7}`,
      imgWidth: "85%",
      maxwidth: "80%",
      justify: "center",
    },
    {
      size: "auto",
      spacing: "3% 15%",
      background: "#FFF",
    },
    {
      message1:
        "With increasing media coverage of the opioid crisis, patients and families are likely to have questions and concerns about opioid treatment plans. ",
      message2:
        "It is important that healthcare providers take the time to discuss safe usage, storage, and disposal of opioid prescriptions with families.",
      message3:
        "Be sure to use clear and concise messaging in these conversations. ",
      message4: "Here are 4 things to make sure your patients know:",
    },
    {
      maxwidth: "100%",
      imageTwo: `${illustration8}`,
    },
    {
      size: "auto",
      spacing: "4% 15%",
      background: "#FFF",
    },
  ];
  const usage = [
    {
      heading: "Minimizing the Risks",
      mainImg: `${illustration9}`,
      imgWidth: "95%",
      maxwidth: "60%",
    },
    {
      size: "50%",
      spacing: "2% 10%",
      background: "#FFF",
    },
    {
      heading: "A discussion on safer usage should include:",
      list1:
        "The importance of taking the appropriate dose and following the medication schedule",
      list2: "When to seek reassessment for under-treated pain",
      list3:
        "The potential warning signs of inappropriate use, suchas using opioids to help with their mood or to reduce anxiety, or taking more than prescribed",
    },
  ];
  const storage = [
    { heading: "Discussing Safe Storage and Return" },
    { maxwidth: "50%", imageTwo: `${illustration10}` },
    {
      heading: "A discussion on safe storage should include:",
      list1:
        "The importance of keeping pills in their packaging and out of children’s reach",
      list2: "Safe return of remaining opioids to pharmacies",
    },
  ];

  return (
    <>
      <Nav />
      <div className="bodyArea">
        <Section id="welcome">
          <ThreeInOne {...welcome[0]}>
            <ParagraphBox>
              <p>{welcome[1].message}</p>
            </ParagraphBox>
          </ThreeInOne>
        </Section>
        <Section id="consideration">
          <Heading>{consideration[0].heading}</Heading>
          <InnerDiv maxwidth="50%">
            <p className="underline">{consideration[1].content}</p>
            <p className="underline">{consideration[2].content}</p>
            <p>{consideration[3].content}</p>
            <DoubleImg {...consideration[4]} />
          </InnerDiv>
          <div className="potential-risk">
            <ThreeInOne {...potentialRisk[0]}>
              <ParagraphBox>
                <p>{potentialRisk[1].message}</p>
                <p>{potentialRisk[1].other}</p>
              </ParagraphBox>
            </ThreeInOne>
          </div>
        </Section>
        <Section id="guidance">
          <Heading>{guidance[0].heading}</Heading>
          <DoubleImg {...guidance[1]} />
          <ParagraphBox {...guidance[3]}>
            <p>{guidance[2].heading}</p>
            <li>{guidance[2].list1}</li>
            <li>{guidance[2].list2}</li>
            <li>{guidance[2].list3}</li>
          </ParagraphBox>
        </Section>
        <Section id="talking">
          <ThreeInOne {...talking[0]}>
            <ParagraphBox {...talking[1]}>
              <span>{talking[2].message1}</span>
              <span>{talking[2].message2}</span>
              <span>{talking[2].message3}</span>
            </ParagraphBox>
            <SidebySide
              {...talking[3]}
              sideOne={
                <ParagraphBox {...talking[4]}>
                  <p>{talking[2].message4}</p>
                </ParagraphBox>
              }
            />
          </ThreeInOne>
        </Section>
        <Section id="usage">
          <ThreeInOne {...usage[0]}>
            <ParagraphBox {...usage[1]}>
              <p>{usage[2].heading}</p>
              <li>{usage[2].list1}</li>
              <li>{usage[2].list2}</li>
              <li>{usage[2].list3}</li>
            </ParagraphBox>
          </ThreeInOne>
        </Section>
        <Section id="storage">
          <Heading>{storage[0].heading}</Heading>
          <SidebySide
            {...storage[1]}
            sideOne={
              <ParagraphBox>
                <p>{storage[2].heading}</p>
                <li>{storage[2].list1}</li>
                <li>{storage[2].list2}</li>
              </ParagraphBox>
            }
          />
        </Section>
        <Section id="links">
          <ThreeInOne {...welcome} />
        </Section>
      </div>
    </>
  );
};

export default Main;
