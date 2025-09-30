import { Badge, Col, Row } from 'reactstrap';

import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IProject } from './IProject';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <ProjectItem key={index.toString()} item={item} index={index} />
      ))}
    </EmptyRowCol>
  );
}

function ProjectItem({ item, index }: { item: IProject.Item; index: number }) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL);
  const endedAt = item.endedAt ? DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL) : null;

  const periodTitle = endedAt
    ? `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`
    : `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`;

  return (
    <div>
      {index > 0 && <hr />}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{periodTitle}</h4>
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i style={Style.gray}>{item.where}</i>

          <ul className="pt-2">
            {item.descriptions?.map((desc, i) => (
              <li key={i.toString()}>{desc.content}</li>
            ))}
            {createSkillKeywords(item.skillKeywords)}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords || skillKeywords.length === 0) return null;

  return (
    <li>
      <strong>Skill Keywords</strong>
      <div style={{ marginTop: 4 }}>
        {skillKeywords.map((keyword, index) => (
          <Badge
            key={index.toString()}
            style={Style.skillKeywordBadge}
            color="secondary"
            className="mr-1 mb-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}
