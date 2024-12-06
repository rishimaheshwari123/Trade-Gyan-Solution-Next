import React from 'react'
import Component from './Component'
import { getSingelService } from '../../../../services/operations/auth'

function page() {
  return (
    <>
        <Component />
    </>
  )
}

export default page



export async function generateMetadata({ params }) {
    const { id } = params;
  
    try {
      const service = await getSingelService(id);
     console.log(service)
      const description = service.description
      const url = `https://www.tradegyan.co/trader/service/${service.id}`;
  
      return {
        title: `${service.serviceName} - Trade Gyan Solutions`,
        description: description,
   
        openGraph: {
          title: `${service.serviceName} - Trade Gyan Solutions`,
          description: description,
          url: url,
       
      
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title: `${service.serviceName} - Trade Gyan Solutions`,
          description: description,
    
        },
      };
    } catch (error) {
      return {
        title: "Error loading service",
        openGraph: {
          title: "Error loading service",
          description: error.message,
         
        },
        twitter: {
          card: 'summary',
          title: "Error loading service",
          description: error.message,
         
        },
      };
    }
  }