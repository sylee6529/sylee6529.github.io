import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

function PostContent({ html }) {
  // 마크다운 컨텐츠를 감싸는 div 엘리먼트의 ref를 저장하는 변수 (DOM 접근을 위해 ref 사용)
  const contentRef = useRef(null);
  // 현재 활성화된 헤딩 엘리먼트의 id를 저장하는 상태(리렌더링을 위해 상태로 관리)
  // const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // 마크다운 컨텐츠 내에 있는 헤딩 엘리먼트들을 `headingElements` 변수에 넣음
    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    // `headingElements` 전체에 이 옵저버를 적용(비동기)
    const observer = new IntersectionObserver(
      entries => {
        // entries.forEach(entry => {
        //   if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        //     setActiveId(entry.target.id);
        //     console.log('entry.target.id', entry.target.id);
        //   }
        // });

        const targets = entries.filter(
          // threshold 를 1 로 해놓아도 `intersectionRatio` 가 1보다 작은 경우가 존재한다.
          // `IntersectionObserver` 가 비동기적이기 때문에,
          // 이벤트가 발생한 시점과 이 리스너가 실행되는 시점이 살짝 달라서 생기는 오차인 것 같다.
          // 일단 확실히 보이는 경우에만 보이는 걸로 처리하고 싶으니까 필터링을 해준다.
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 1
        );

        console.log('targets', targets[0]?.target.id);

        // 대상이 하나도 없을 때는 아무 일도 하지 않는다.
        if (targets.length === 0) {
          return;
        }

        contentRef.current
          ?.querySelectorAll(".active")
          .forEach((element) => element.classList.remove("active"));

          targets.forEach((it) => {
            // 대상 헤딩 엘리먼트의 id 어트리뷰트를 추출하고
            const targetId = it.target.getAttribute("id");
            // // setActiveId에 저장한다.
            // setActiveId(targetId);

            // 그 아이디 값을 href 어트리뷰트로 갖고 있는 목차 내 앵커 아이템을 찾아서
            const linkSelector = `.table-of-contents a[href='#${encodeURI(targetId ?? "")}']`;
            const linkElement = contentRef.current?.querySelector(linkSelector);
            console.log(`linkSelector: ${linkSelector}`, linkElement);
            // 해당 앵커 엘리먼트를 하이라이팅 해준다.
            linkElement?.classList.add("active");
          });
      },
      { threshold: 1.0 },
    );

    headings.forEach(heading => observer.observe(heading));

    return () => {
      headings.forEach(heading => observer.unobserve(heading));
    };
  }, []);


  return (
    <div className="post-content"  ref={contentRef}>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContent;
