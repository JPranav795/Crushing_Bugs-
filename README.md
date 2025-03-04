# Puzzle Drag and Drop - Bug Fixes

## Project Description
This project is a simple **drag and drop puzzle game** where players can drag puzzle pieces and place them in the correct drop zones. However, the initial version of the game had a few bugs affecting user experience. This document outlines the issues, fixes, and implementation details.

## Fixed Bugs 

### 1️st Bug: **Multiple Pieces Can Be Dropped in One Zone**
#### Issue:
- Players were able to drop **more than one puzzle piece** into the same drop zone, which shouldn't happen.

#### Solution:
- Before appending a new piece to a drop zone, the code now **checks if the zone is empty**.
- If a piece is already there, the new piece **cannot be placed**.

### 2️nd Bug: **Pieces Stay in Drop Zones After Reset**
#### Issue:
- When resetting the puzzle or selecting a new background, pieces **remained in the drop zones** instead of moving back to the starting area.

#### Solution:
- On reset, **all pieces are moved back** to the original puzzle area.