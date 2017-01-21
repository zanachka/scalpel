// @flow

type AdjacentSiblingCombinatorTokenType = {|
  +type: 'adjacentSiblingCombinator'
|}

type AttributePresenceSelectorTokenType = {|
  +name: string,
  +type: 'attributePresenceSelector'
|};

type AttributeValueSelectorTokenType = {|
  +name: string,
  +operator: '=' | '~=' | '|=' | '^=' | '$=' | '*=',
  +type: 'attributeValueSelector',
  +value: string
|};

type ChildCombinatorTokenType = {|
  +type: 'childCombinator'
|};

type ClassSelectorTokenType = {|
  +name: string,
  +type: 'classSelector'
|};

type DescendantCombinatorTokenType = {|
  +type: 'descendantCombinator'
|};

type GeneralSiblingCombinatorTokenType = {|
  +type: 'generalSiblingCombinator'
|};

type IdSelectorTokenType = {|
  +name: string,
  +type: 'idSelector'
|};

type PseudoClassSelectorTokenType = {|
  +name: string,
  +parameters: Array<string>,
  +type: 'pseudoClassSelector'
|};

type PseudoElementSelectorTokenType = {|
  +name: string,
  +type: 'pseudoElementSelector'
|};

type TypeSelectorTokenType = {|
  +name: string,
  +type: 'typeSelector'
|};

type UniversalSelectorTokenType = {|
  +type: 'universalSelector'
|};

export type TokenType =
  AdjacentSiblingCombinatorTokenType |
  AttributePresenceSelectorTokenType |
  AttributeValueSelectorTokenType |
  ChildCombinatorTokenType |
  ClassSelectorTokenType |
  DescendantCombinatorTokenType |
  GeneralSiblingCombinatorTokenType |
  IdSelectorTokenType |
  PseudoClassSelectorTokenType |
  PseudoElementSelectorTokenType |
  TypeSelectorTokenType |
  UniversalSelectorTokenType

export type SelectorTokenType = {|
  +type: 'selector',
  +body: Array<TokenType>
|};
