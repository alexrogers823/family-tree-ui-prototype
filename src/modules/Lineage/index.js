import React, { useRef, useLayoutEffect } from 'react';
import MemberCard from '../../components/MemberCard';
import * as d3 from 'd3';

const Lineage = props => {

  const treeRef = useRef();

  useLayoutEffect(() => { // useLayoutEffect for synchronous code to avoid issues with DOM
    const sampleData = {
      id: 3,
      preferredName: "Helen",
      lastName: "Rogers",
      isInLaw: false,
      spouseId: 7,
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
          lastName: "Rogers",
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
        primaryParentId: null,
        secondaryParentId: null
      },
      {
        id: 8,
        preferredName: "Patricia",
        lastName: "Crozier",
        isInLaw: false,
        spouseId: 9,
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
        lastName: "Rogers",
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

    const margin = 50;
    const width  = window.innerWidth;
    const height = window.innerHeight;

    // initializing the svg 
    const svg = d3.select(treeRef.current)
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height)
                  .append("g")
                  .attr("transform", `translate(${margin}, ${margin})`);

    // const zoom = d3.zoom()
    //                 .scaleExtent([0.25, 30]) // [min, max]
    //                 .on("zoom", () => svg.attr("transform", d3.event.transform))
  
    // arranging the data into d3 
    // const treeStructure = d3.hierarchy(sampleData);
    const treeStructure = d3.stratify()
                            .id(d => d.id)
                            .parentId(d => d.primaryParentId)
                            (sampleData2);

    // setting the spacing and size of the tree 
    const treeLayout = d3.tree()
                          .separation((a, b) => (a.primaryParentId === b.primaryParentId) ? 2 : 2)
                          .size([650, 300]); // [width, height]

    // making the data from the tree accessible 
    const information = treeLayout(treeStructure);
    console.log('tree info: ', information.links());

    // setting the connecting line for the primary parent 
    const connections = svg.append("g")
                          .selectAll("path")
                          .data(information.links());

    connections.enter()
                .append("path")
                .attr("d", d => `M ${d.source.x - 20}, ${d.source.y} h 60 v 50 H ${d.target.x} V ${d.target.y}`)
                .style("fill", "none")
                .style("stroke", "silver")
                .style("stroke-width", "2");

    // setting the connecting line for the secondary parent 
    const connections2 = svg.append("g")
                          .selectAll("path")
                          .data(information.links());

    connections2.enter()
                .append("path")
                .attr("d", d => `M ${d.source.x + 20}, ${d.source.y} h 40`)
                .style("display", d => d.source.data.spouseId ? "inherit" : "none")
                .style("fill", "none")
                .style("stroke", "silver")
                .style("stroke-width", "2");

    // setting the area for the primary parent 
    const rectangles = svg.append("g")
                          .selectAll("rect")
                          .data(information.descendants());

    rectangles.enter()
              .append("rect")
              .attr("x", d => d.x - 60)
              .attr("y", d => d.y - 20)
              .style("fill", "white")
              .style("stroke", "silver")
              .style("width", "80px")
              .style("height", "40px")
              .style("stroke-width", "2px");

    // setting the area for the secondary parent 
    const spouseRectangles = svg.append("g")
                                .selectAll("rect")
                                .data(information.descendants());

    spouseRectangles.enter()
                    .append("rect")
                    .attr("x", d => d.x + 60)
                    .attr("y", d => d.y - 20)
                    .style("display", d => d.data.spouseId ? "inherit" : "none")
                    .style("fill", "white")
                    .style("stroke", "silver")
                    .style("width", "80px")
                    .style("height", "40px")
                    .style("stroke-width", "2px");

    // creating text for the primary parent 
    const content = svg.append("g")
                      .selectAll("text")
                      .data(information.descendants());

    content.enter()
            .append("text")
            .text(d => d.data.preferredName)
            .attr("x", d => d.x - 20)
            .attr("y", d => d.y)
            .style("dominant-baseline", "middle")
            .style("text-anchor", "middle")
            .style("font-size", "20px");

    // creating text for the secondary parent 
    const spouseNames = svg.append("g")
                          .selectAll("text")
                          .data(information.descendants())

    // spouseNames.enter()
    //           .append("text")
    //           .text("test")
    //           .attr("x", d => d.x + 100)
    //           .attr("y", d => d.y)
    //           .style("display", d => d.data.spouseId ? "inherit" : "none")
    //           .style("dominant-baseline", "middle")
    //           .style("text-anchor", "middle")
    //           .style("font-size", "20px");

  }, []);


  return (
    <div ref={treeRef}></div>
  )


  // return (
  //   <div>
  //     {props.parents.map(parent => {
  //       return (
  //         <MemberCard 
  //           name={props.name}
  //           birth={props.birth}
  //           death={props.death}
  //         />
  //       )
  //     })}
  //   </div>
  // )
}

export default Lineage;