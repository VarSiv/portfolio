import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import translations from '../translations.json';

import { LINE_BLUE, TEXT_BLUE } from "../App";

export const TextButton = ({ onClick, translationKey, language, isActive }) => (
    <Button
      onClick={onClick}
      className={`
        ml-0 text-lg font-mono font-normal
        bg-transparent text-[${TEXT_BLUE}] border-[${TEXT_BLUE}]
        relative
        after:content-[''] after:absolute after:bottom-0 after:left-0
        after:w-full after:h-0.5 after:bg-current
        after:transition-all after:duration-300
        after:origin-left after:scale-x-0 hover:after:scale-x-100
        ${isActive ? 'after:scale-x-100' : ''}
      `}
      ml={0}
      size="xl"
      fontSize="lg"
      color={TEXT_BLUE}
      bg="transparent"
      fontFamily="mono"
      fontWeight="normal"
      borderColor={TEXT_BLUE}
      _hover=""
      textDecoration={isActive ? "underline" : "none"}
      textUnderlineOffset="4px"
    >
      {translations[language]?.[translationKey] || translationKey}
    </Button>
  );