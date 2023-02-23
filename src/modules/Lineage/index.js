import React, { useRef, useLayoutEffect, useState } from 'react';
import MemberCard from '../../components/MemberCard';
import Link from '../../components/common/Link';
import * as d3 from 'd3';
import { memberUrl } from '../../urls';
import { line, selectAll } from 'd3';

const Lineage = props => {

  const treeRef = useRef();
  const [lineageData, setLineageData] = useState({});
  const [loading, setLoading] = useState(true);

  // === CONSTANT VARIABLES ===
  const svgMargin = 50;
  const width  = window.innerWidth;
  const height = window.innerHeight;
  const margin = {left: 20, right: 20};

  const nameFontSize = 10;

  const memberCardLength = 80;
  const memberCardNameLength = memberCardLength / 4;
  const memberCardTimeLength = (memberCardLength / 4) + 10;
  const memberCardFontSize = 8;
  // ===

  // === Helper Functions === 
  const arrangeMemberTimeline = (memberData) => {
    if (memberData.birthYear && memberData.deathYear) {
      return `${memberData.birthYear} - ${memberData.deathYear}`
    } else if (memberData.birthYear) {
      return `${memberData.birthYear} -`
    } else {
      return "Unknown"
    }
  }

  const createConnector = (memberData, type="primary") => {
    if (type === "secondary") {
      return `M ${memberData.source.x + margin.right}, ${memberData.source.y} h 40`;
    } else if (type === "leaf") {
      return `M ${memberData.target.x + margin.right}, ${memberData.target.y} h 40`;
    }
    return `M ${memberData.source.x - margin.left}, ${memberData.source.y} h 60 v ${memberCardLength} H ${memberData.target.x - margin.left} V ${memberData.target.y}`;
  }
  // ===

  const fetchData = async() => {
    const response = await fetch("/api/members/tree/")
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return response.json();
  }

  console.log(lineageData);

  useLayoutEffect(() => { // useLayoutEffect for synchronous code to avoid issues with DOM
    // fetchData()
    //   .then(response => setLineageData(response))
    //   .catch(error => {
    //     console.error(error)
    //   });

    d3.json("/api/members/tree/")
      .then(data => {
        setLineageData(data);
        setLoading(false);
      });

    const sampleData = {
      id: 3,
      preferredName: "Helen",
      lastName: "Rogers",
      isInLaw: false,
      birthYear: 1920,
      deathYear: 2021,
      spouseId: 7,
      spouse: {
        id: 7,
        preferredName: "Oscar",
        lastName: "Rogers",
        isInLaw: true,
        spouseId: 3,
        birthYear: 1915,
        deathYear: 1994,
        primaryParentId: null,
        secondaryParentId: null 
      },
      children: [
        {
          id: 8,
          preferredName: "Patricia",
          lastName: "Crozier",
          isInLaw: false,
          spouseId: 9,
          children: [
            {
              id: 12,
              preferredName: "Angie",
              lastName: "Peasant",
              isInLaw: false,
              spouseId: 13,
              children: null
            },
            {
              id: 14,
              preferredName: "Adella",
              lastName: "Crozier",
              isInLaw: false,
              spouseId: 15,
              children: null
            },
            {
              id: 21,
              preferredName: "Ronnie",
              lastName: "Crozier",
              isInLaw: false,
              spouseId: 16,
              children: null
            }
          ]
        },
        {
          id: 10,
          preferredName: "Rogercarole",
          lastName: "Rogers-Hall",
          isInLaw: false,
          spouseId: 11,
          children: [
            {
              id: 6,
              preferredName: "Simone",
              lastName: "Banks",
              isInLaw: false,
              spouseId: 17,
              children: null
            }
          ]
        },
        {
          id: 4,
          preferredName: "Barry",
          lastName: "Rogers",
          isInLaw: false,
          spouseId: null,
          children: [
            {
              id: 5,
              preferredName: "Alex",
              lastName: "Rogers",
              isInLaw: false,
              spouseId: null,
              children: null
            }
          ]
        }
      ]
    };

    const sampleData2 = [
      {
        id: 3,
        preferredName: "Helen",
        lastName: "Rogers",
        isInLaw: false,
        spouseId: 7,
        birthYear: 1920,
        deathYear: 2021,
        primaryParentId: null,
        secondaryParentId: null
      },
      {
        id: 7,
        preferredName: "Oscar",
        lastName: "Rogers",
        isInLaw: true,
        spouseId: 3,
        birthYear: 1915,
        deathYear: 1994,
        primaryParentId: null,
        secondaryParentId: null 
      },
      {
        id: 8,
        preferredName: "Patricia",
        lastName: "Crozier",
        isInLaw: false,
        spouseId: 9,
        birthYear: 1947,
        primaryParentId: 3,
        secondaryParentId: 7
      },
      {
        id: 12,
        preferredName: "Angie",
        lastName: "Peasant",
        isInLaw: false,
        spouseId: 13,
        primaryParentId: 8,
        secondaryParentId: 9
      },
      {
        id: 14,
        preferredName: "Adella",
        lastName: "Crozier",
        isInLaw: false,
        spouseId: 15,
        primaryParentId: 8,
        secondaryParentId: 9
      },
      {
        id: 21,
        preferredName: "Ronnie",
        lastName: "Crozier",
        isInLaw: false,
        spouseId: 16,
        primaryParentId: 8,
        secondaryParentId: 9
      },
      {
        id: 10,
        preferredName: "Rogercarole",
        lastName: "Rogers-Hall",
        isInLaw: false,
        spouseId: 11,
        primaryParentId: 3,
        secondaryParentId: 7
      },
      {
        id: 6,
        preferredName: "Simone",
        lastName: "Banks",
        isInLaw: false,
        spouseId: 17,
        primaryParentId: 10,
        secondaryParentId: 11
      },
      {
        id: 4,
        preferredName: "Barry",
        lastName: "Rogers",
        isInLaw: false,
        spouseId: null,
        primaryParentId: 3,
        secondaryParentId: 7
      },
      {
        id: 5,
        preferredName: "Alex",
        lastName: "Rogers",
        isInLaw: false,
        spouseId: null,
        primaryParentId: 4,
        secondaryParentId: null
      }
    ]

    // initializing the svg 
    const svg = d3.select(treeRef.current)
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height)
                  .append("g")
                  .attr("transform", `translate(${svgMargin}, ${svgMargin})`);

    // const zoom = d3.zoom()
    //                 .scaleExtent([0.25, 30]) // [min, max]
    //                 .on("zoom", () => svg.attr("transform", d3.event.transform))
  
    // arranging the data into d3 
    // const treeStructure = d3.hierarchy(lineageData);
    const treeStructure = d3.hierarchy(sampleData);
    // const treeStructure = d3.stratify()
    //                         .id(d => d.id)
    //                         .parentId(d => d.primaryParentId)
    //                         (sampleData2);

    // setting the spacing and size of the tree 
    const treeLayout = d3.tree()
                          .separation((a, b) => (a.primaryParentId === b.primaryParentId) ? 2 : 2)
                          .size([width, height / 2]); // [width, height]

    // making the data from the tree accessible 
    const treeLineage = treeLayout(treeStructure);
    console.log('tree info: ', treeLineage.links());

    // setting the connecting lines 
    const connector = svg.append("g")
                          .selectAll("path")
                          .data(treeLineage.links());

    // connecting line for primary parent 
    connector.enter()
                .append("path")
                .attr("d", d => createConnector(d))
                .style("fill", "none")
                .style("stroke", "silver")
                .style("stroke-width", "2");

    // connecting line for secondary parent 
    connector.enter()
                .append("path")
                .attr("d", d => createConnector(d, "secondary"))
                .style("display", d => d.source.data.spouseId ? "inherit" : "none")
                .style("fill", "none")
                .style("stroke", "silver")
                .style("stroke-width", "2");

    // connecting line for leaf (if married)
    connector.enter()
              .append("path")
              .attr("d", d => createConnector(d, "leaf"))
              .style("display", d => d.target.data.spouseId ? "inherit" : "none")
              .style("fill", "none")
              .style("stroke", "silver")
              .style("stroke-width", "2");

    // setting the area for the primary parent 
    const primaryMemberCard = svg.append("g")
                          .selectAll("rect")
                          .data(treeLineage.descendants());

    primaryMemberCard.enter()
              .append("a")
              .attr("xlink:href", d => `${memberUrl}/${d.data.id}`)
              .append("rect")
              .attr("x", d => d.x - (memberCardLength / 2) - margin.left)
              .attr("y", d => d.y - (memberCardLength / 2))
              .style("fill", "white")
              .style("stroke", "silver")
              .style("width", memberCardLength)
              .style("height", memberCardLength)
              .style("stroke-width", "2px");

    // setting the area for the secondary parent 
    const secondaryMemberCard = svg.append("g")
                                .selectAll("rect")
                                .data(treeLineage.descendants());

    secondaryMemberCard.enter()
                    .append("rect")
                    .attr("x", d => d.x + (memberCardLength / 2) + margin.right)
                    .attr("y", d => d.y - (memberCardLength / 2))
                    .style("display", d => d.data.spouseId ? "inherit" : "none")
                    .style("fill", "white")
                    .style("stroke", "silver")
                    .style("width", memberCardLength)
                    .style("height", memberCardLength)
                    .style("stroke-width", "2px");

    // creating text for the primary parent 
    const primaryMemberInfo = svg.append("g")
                      .selectAll("text")
                      .data(treeLineage.descendants());

    primaryMemberInfo.enter()
            .append("text")
            .text(d => `${d.data.preferredName} ${d.data.lastName}`) //Name of person
            .attr("x", d => d.x - margin.left)
            .attr("y", d => d.y + memberCardNameLength) //may change later
            .style("dominant-baseline", "middle")
            .style("text-anchor", "middle")
            .style("font-size", nameFontSize);


    primaryMemberInfo.enter()
            .append("text")
            .text(d => arrangeMemberTimeline(d.data)) //Birth Year and Death Year
            .attr("x", d => d.x - margin.left)
            .attr("y", d => d.y + memberCardTimeLength)
            .style("dominant-baseline", "middle")
            .style("text-anchor", "middle")
            .style("font-size", memberCardFontSize);

    // const contentLink = content.append("g").selectAll(linkRef.current).data(treeLineage.descendants());

    // contentLink.enter().append(linkRef.current).attr("href", "localhost:3000");

    // creating text for the secondary parent 
    const secondaryMemberInfo = svg.append("g")
                          .selectAll("text")
                          .data(treeLineage.descendants())

    secondaryMemberInfo.enter()
              .append("text")
              .text(d => d.data.spouse ? `${d.data.spouse.preferredName} ${d.data.spouse.lastName}` : "test")
              .attr("x", d => d.x + 100)
              .attr("y", d => d.y + memberCardNameLength) //may change later
              .style("display", d => d.data.spouseId ? "inherit" : "none")
              .style("dominant-baseline", "middle")
              .style("text-anchor", "middle")
              .style("font-size", nameFontSize);

    secondaryMemberInfo.enter()
              .append("text")
              .text(d => d.data.spouse ? arrangeMemberTimeline(d.data.spouse) : null) //Birth Year and Death Year
              .attr("x", d => d.x + 100)
              .attr("y", d => d.y + memberCardTimeLength)
              .style("dominant-baseline", "middle")
              .style("text-anchor", "middle")
              .style("font-size", memberCardFontSize);

  }, []);


  // return (
  //   <>
  //     { !loading && <div ref={treeRef}></div> }
  //   </>
  // )

  return (
    <div ref={treeRef}></div>
  )

}

export default Lineage;