import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import copy from './copy';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 要复制的文本 */
  text: string;
  /** 复制成功的回调 */
  onCopy?: () => void;
  /** 包裹的元素 */
  children?: React.ReactNode;
};

const StyledWrap = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

/** 复制文本*/
const CopyToClipboard = React.forwardRef<HTMLDivElement, Props>(
  (props: Props, ref) => {
    const { text, onCopy, children, className, ...rest } = props;

    return (
      <StyledWrap
        {...rest}
        ref={ref}
        className={clsx('uc-copy-to-clipboard', className)}
        onClick={() => {
          copy(text);
          onCopy?.();
        }}
      >
        {children}
      </StyledWrap>
    );
  },
);

CopyToClipboard.displayName = 'UC-CopyToClipboard';

export default CopyToClipboard;
