import { styled } from 'next-yak';
import type { FunctionComponent } from 'react';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <ProseContainer
      className={className}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

const ProseContainer = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  line-height: 1.75;
  color: black;
`;

//   & > h1, h2, h3, h4, h5, h6 {
//     margin-top: 2rem;
//     font-weight: 600;
//     letter-spacing: 0.025em;
//     color: black;
//   }

//   & > h1 { 
// 		font-size: 3rem; 
// 		line-height: 1;
// 	}
//   & > h2 { 
// 		font-size: 2.25rem;
//   	line-height: 2.5rem; 
// 	}
//   & > h3 { 
// 		font-size: 1.875rem; 
// 		line-height: 2.25rem;
// 	}
//   & > h4 { 
// 		font-size: 1.5rem; 
// 		line-height: 2rem;
// 	}
//   & > h5 { 
// 		font-size: 1.25rem; 
// 		line-height: 1.75rem;
// 	}
//   & > h6 { 
// 		font-size: 1.125rem;
// 		line-height: 1.75rem; 
// 	}

//   & > a {
//     color: black;
//     text-decoration: underline;
//     &:hover {
//       color: #d4d4d4;
//     }
//   }

//   & > strong { color: black; }

//   & > ol, ul {
//     margin-top: 2rem;
//     padding-left: 1.5rem;
//   }

//   & > ol { list-style-type: decimal; }
//   & > ul { list-style-type: disc; }

//   @media (prefers-color-scheme: dark) {
//     color: white;

//     & > h1, h2, h3, h4, h5, h6 {
//       color: white;
//     }

//     & > a {
//       color: white;
//     }

//     & > strong {
//       color: white;
//     }
//   }
// `;

export default Prose;