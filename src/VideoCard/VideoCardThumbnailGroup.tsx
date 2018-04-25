import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {VideoCardStyleSettings} from './VideoCardHelpers';
import {VideoCardThumbnailData} from './VideoCard';
import COLORS from '../globals/js/constants/COLORS';

export interface VideoCardThumbnailGroupProps extends React.HTMLProps<HTMLDivElement>  {
    thumbnailData: Array<VideoCardThumbnailData>,
};
// ==================== VideoCardThumbnailGroup Styled

const WrapperStyled = styled<React.SFC<HTMLDivElement>, 'div'>('div')`
    padding-bottom: 56.25%; // this is forces this area into a thumbnail aspcect ratio
`;

const ThumbnailsStyled  = styled<React.SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    padding: ${rem(VideoCardStyleSettings.padding)} ${rem(VideoCardStyleSettings.padding)} 0;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const MinorThumbnailsWrapper = styled<React.SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    flex: 0 1 40%;
    flex-direction: column;
    overflow: hidden;
`;

const MajorThumbnail = styled<React.SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    flex: 0 1 60%;
`;

const MinorThumbnail = styled<React.SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    max-height: 50%;
    flex-basis: 50%;
    margin: 0 0 0 ${rem(VideoCardStyleSettings.padding / 2)};
    
    &:last-of-type {
        margin-top: ${rem(VideoCardStyleSettings.padding / 2)};
    }
`;

const GroupThumbnailImage = styled<React.SFC<HTMLDivElement>, 'div'>('div')`
    width: 100%;
    height: 100%;
    border-radius: ${rem(2)};
    background-size: cover;
    background-position: center;
    background-color: ${COLORS.Porcelain};
`;
// ==================== VideoCardThumbnailGroup

const VideoCardThumbnailGroup: React.SFC<VideoCardThumbnailGroupProps> = ({
    thumbnailData,
    ref: _, // filter out ref from styled component
}) => {
    
    return (
        <WrapperStyled>
            <ThumbnailsStyled>
                <MajorThumbnail>
                    <GroupThumbnailImage
                        style={thumbnailData[0] && {
                            backgroundImage: `url(${thumbnailData[0].thumbnailSrc})`
                        }}
                    />
                </MajorThumbnail>
                <MinorThumbnailsWrapper>
                    <MinorThumbnail>
                        <GroupThumbnailImage
                            style={thumbnailData[1] && {
                                backgroundImage: `url(${thumbnailData[1].thumbnailSrc})`
                            }}
                        />
                    </MinorThumbnail>
                    <MinorThumbnail>
                        <GroupThumbnailImage
                            style={thumbnailData[2] && {
                                backgroundImage: `url(${thumbnailData[2].thumbnailSrc})`
                            }}
                        />
                    </MinorThumbnail>
                </MinorThumbnailsWrapper>
            </ThumbnailsStyled>
        </WrapperStyled>
    );
};

export default VideoCardThumbnailGroup;