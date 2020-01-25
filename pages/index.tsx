import styled from '../styles/themed-components';
import Link from 'next/link';

const StyledIndex = styled.div`
  h3 {
    font-size: 18px;
    padding: 20px;
  }

  ul {
    padding: 0 20px;
    font-size: 16px;
    li {
      cursor: pointer;
      height: 30px;
      line-height: 30px;
    }
  }
`;

const Index = () => (
  <StyledIndex>
    <h3>React Hooks</h3>
    <ul>
      <li><Link href="/use-state"><a>useState</a></Link></li>
      <li><Link href="/use-effect" ><a>useEffect</a></Link></li>
    </ul>
  </StyledIndex>
);

export default Index;
